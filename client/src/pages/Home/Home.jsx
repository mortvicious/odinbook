import React from 'react'
import styles from './Home.module.scss'
import MainWrapper from '../../components/MainWrapper/MainWrapper'
import { observer } from 'mobx-react-lite'
import Feed from '../../components/Feed/Feed'
import user from '../../common/store/User'
import Login from '../../pages/Login/Login'


const Home = observer(() => {

  const render = () => {
    if (user.isAuth) {
      return (
        <>
          <Feed/>
        </>
      )
    } else {
      return (
        <>
          <Login/>
        </>
      )
    }
  }
  

  return (
    <MainWrapper>
        <div className={styles.Home}>
          {render()}
        </div>
    </MainWrapper>
  )
})


export default Home
