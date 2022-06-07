import React, {useEffect} from 'react'
import styles from './Home.module.scss'
import MainWrapper from '../../components/MainWrapper/MainWrapper'
import { observer } from 'mobx-react-lite'
import login from '../../common/store/Login'
import { NavLink } from 'react-router-dom'
import PATH from '../../common/routing/routes'
import Feed from '../../components/Feed/Feed'
import user from '../../common/store/User'


const Login = observer(() => {

  const handleLogin = () => {
    login.setLoggedIn()
  }

  return (
    <div className={styles.Login}>
      <form className={styles['login-form']}>
        <input onChange={(e) => {user.setUsername(e.target.value)}} placeholder='Login' type="email" />
        <input placeholder='Password' type="password" />
      </form>
        <button onClick={handleLogin} type='submit' className={styles['login-btn']}>Login</button>
        <NavLink to={PATH.SIGN_UP}>
          <p className={styles['sign-up-link']} href='#reg'>Sign Up</p>
        </NavLink>
    </div>
  )
})

const Home = observer(() => {
  const render = {
    loggedIn: () => {
      return(
        <>
          <Feed/>  
        </>
      )
    },
    loggedOut: () => {

      return (
        <>
            <h2 className={styles['title']}>Odinbook</h2>
            <Login/>
        </>
      )
    },
    main: () => {
      if (login.loggedIn) {
        return (
          render.loggedIn()
        )
      } else {
        return (

          render.loggedOut()
        )
      }
    }
  }

  useEffect(() => {
    user.setUsername('coolguy')
    login.setLoggedIn()
    
    return () => {
      
    }

  }, [])
  

  return (
    <MainWrapper>
        <div className={styles.Home}>
          {render.main()}
        </div>
    </MainWrapper>
  )
})


export default Home