import React, {useState, useEffect} from 'react'
import styles from './Signup.module.scss'
import { Link } from 'react-router-dom'
import user from '../../common/store/User'
import { useNavigate } from 'react-router-dom'

export default function Signup() {

    const navigate = useNavigate()

    const [regBody, setRegBody] = useState({
        email: '',
        login: '',
        password: '',
        link: '',
        repeatPassword: ''
    })

    const [isLoading, setLoading] = useState(false)

    const handleRegBodyChange = (e) => {
        const value = e.target.value
        if (e.target.id === 'login') {
            setRegBody({...regBody, login: value})
        } else if (e.target.type === 'email') {
            setRegBody({...regBody, email: value})
        } else if (e.target.id === 'pas' ) {
            setRegBody({...regBody, password: value})
        } else if (e.target.id === 'repas') {
            setRegBody({...regBody, repeatPassword: value})
        } else if (e.target.id === 'link') {
            setRegBody({...regBody, link: value})
        }
    }

    const [error, setError] = useState(null)

    const [isSuccess, setSuccess] = useState(false)

    const handleSubmitBtn = async (e) => {
        e.preventDefault()
        setLoading(true)
        // user.setError(null)
        const res = await user.registration(regBody.email, regBody.login, regBody.password, regBody.link)
        setLoading(false)
        setError(user.error)
        handleErrorsShow()
        if (res) {
            setTimeout(() => {
                navigate('/')
            }, 1200)
        } else if (!res) {
            return
        }
        setSuccess(!isSuccess)
    }

    const handleErrorsShow = () => {
            if (error === null) return 0
            return (
                error.errors.map(err => {
                    return (
                        <p key={err.index}>{err.msg}</p>
                    )
                })
            )
    }



    return (
      <div className={styles.Signup}>
          <h3 className={styles['title']}><Link to='/'>Cyberwarld</Link></h3>
          <div className={'loading-spinner-wrapper spinner-signup ' + (isLoading? 'd-f' : '')}>
            <div className="lds-ripple"><div></div><div></div></div>
          </div>
          <div className={styles['error-field']}>
            {error !== null ? handleErrorsShow() : ''}
            <p className={styles['success-message'] + ` ` + (isSuccess? styles['visible'] : '')}>Access granted</p>
            <p className={styles['success-message'] + ` ` + (isSuccess? styles['visible'] : '')}>Redirecting...</p>
          </div>
          <form className={styles['signup-form']}>
              <input id='login' onChange={handleRegBodyChange} placeholder='Login' type="text" />
              <input id='email' onChange={handleRegBodyChange} placeholder='E-mail' type="email" />
              <input id='link' onChange={handleRegBodyChange} placeholder='Unique profile link' type="text" />
              <input id='pas' onChange={handleRegBodyChange} placeholder='Password' type="password" />
              <button onClick={handleSubmitBtn} className={styles['signup-btn']}>Sign Up</button>
          </form>
      </div>
    )
}
