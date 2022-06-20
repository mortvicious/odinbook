import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import PATH from '../../common/routing/routes'
import { observer } from 'mobx-react-lite'
import user from '../../common/store/User'
import styles from './Login.module.scss'
import ReactLoading from 'react-loading'
import MainWrapper from '../../components/MainWrapper/MainWrapper'


const Login = observer(() => {
  
  
  const [regBody, setRegBody] = useState({
    email: '',
    password: ''
  })

  
  const handleLogin = (e) => {
    e.preventDefault()
    user.login(regBody.email, regBody.password)
  }


  const handleUserChange = (e) => {
    const value = e.target.value
    if (e.target.type === 'email') {
      setRegBody({...regBody, email: value})
    } else if (e.target.type === 'password') {
      setRegBody({...regBody, password: value})
    }
   }

  
  return (
    <MainWrapper>
      <div className={styles.Login}>
        <h2 className={styles['title']}>Cyberwarld</h2>
        <div className={styles['login-container']}>
            <form className={styles['login-form']}>
              <input className={styles['login-input']} onChange={handleUserChange} placeholder='Email' type="email" />
              <input className={styles['login-input']} onChange={handleUserChange} placeholder='Password' type="password" />
              <button onClick={handleLogin} type='submit' className={styles['login-btn']}>Login</button>
            </form>
              <NavLink to={PATH.SIGN_UP}>
                <p className={styles['sign-up-link'] + ` t-s-s`} href='#reg'>Sign Up</p>
              </NavLink>
        </div>
      </div>
    </MainWrapper>
  )
})

export default Login