import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import PATH from '../../common/routing/routes'
import { observer } from 'mobx-react-lite'
import user from '../../common/store/User'
import styles from './Login.module.scss'
import MainWrapper from '../../components/MainWrapper/MainWrapper'
import LoadingCircle from '../../components/LoadingCircle/LoadingCircle'

const Login = observer(() => {
  
  
  const [regBody, setRegBody] = useState({
    email: '',
    password: ''
  })

  const [isLoading, setLoading] = useState(false)

  const [error, setError] = useState(null)


  
  const handleLogin = async(e) => {
    e.preventDefault()
    setLoading(true)
    await user.login(regBody.email, regBody.password)
      .then(() => setLoading(false))
    setError(user.error)
    // handleErrorsShow()
  }

  const handleErrorsShow = () => {
    console.log(`ERRRR IS ${error}`)
    return (
        // error.map(err => {
            // return (
                <p>{error}</p>
            // )
        )
    // )
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
        <div className={'loading-spinner-wrapper ' + (isLoading? 'd-b' : '')}>
          {/* <div className="lds-ripple"><div></div><div></div></div> */}
          <LoadingCircle/>
        </div>
          <div className={styles['error-field']}>
            {error !== null ? handleErrorsShow() : ''}
          </div>
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