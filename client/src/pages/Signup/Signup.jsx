import React, {useState} from 'react'
import styles from './Signup.module.scss'
import { Link } from 'react-router-dom'
export default function Signup() {

    const [regBody, setRegBody] = useState({
        login: '',
        email: '',
        password: '',
        repeatPassword: ''
    })

    const [errorFields, setErrorFields] = useState({
        login: '',
        //short, registered, long
        email: '',
        //invalid, already registered
        password: ''
        //short, no password
    })

    const handleRegBodyChange = (e) => {
        const value = e.target.value
        if (e.target.type === 'text') {
            setRegBody({...regBody, login: value})
        } else if (e.target.type === 'email') {
            setRegBody({...regBody, email: value})
        } else if (e.target.id === 'pas' ) {
            setRegBody({...regBody, password: value})
        } else if (e.target.id === 'repas') {
            setRegBody({...regBody, repeatPassword: value})
        }
    }

    const checkFields = {
        login: () => {
            if (regBody.login.length < 2) {
                setErrorFields({...errorFields, login: 'short' })
            } else if (regBody.login.length > 12) {
                setErrorFields({...errorFields, login: 'long' })
            } else {
                setErrorFields({...errorFields, login: ''})
            }
        },
        email: () => {
            if (regBody.email === '' || regBody.email === ' ') {
                setErrorFields({...errorFields, email: 'invalid'})
            } else {
                setErrorFields({...errorFields, email: ''})
            }
        },
        password: () => {
            if (regBody.password !== regBody.repeatPassword) {
                setErrorFields({...errorFields, password: 'nomatch'})
            } else {
                setErrorFields({...errorFields, password: ''})
            }
        },
        checkup: () => {
            // checkFields.login()
            // checkFields.email()
            checkFields.password()
        }
    }

    const handleSubmitBtn = () => {
        // checkFields.checkup()
        // console.log(errorFields)
    }

    return (
      <div className={styles.Signup}>
          <h3 className={styles['title']}><Link to='/'>Odinbook</Link></h3>
          <p className={styles['attention']}>It's comletely free!</p>
          <div className={styles['errors']}>
            <p></p>
          </div>
          <form className={styles['signup-form']}>
              <input id='login' onChange={handleRegBodyChange} placeholder='Login' type="text" />
              <input id='email' onChange={handleRegBodyChange} placeholder='E-mail' type="email" />
              <input id='pas' onChange={handleRegBodyChange} placeholder='Password' type="password" />
              <input id='repas' onChange={handleRegBodyChange} placeholder='Repeat password' type="password" />
          </form>
          <button onClick={handleSubmitBtn} className={styles['signup-btn']}>Sign Up</button>
      </div>
    )
}
