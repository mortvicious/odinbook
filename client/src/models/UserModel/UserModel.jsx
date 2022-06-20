import React, {useEffect} from 'react'
import styles from './UserModel.module.scss'
import { useNavigate } from 'react-router-dom'
import userPage from '../../common/store/UserPage'
import user from '../../common/store/User'

export default function UserModel(
      {
        username, 
        link,
        reverse, 
        mainUser, 
        onClick, 
        comment, 
        isFriend,
        userId,
        onUserPage
      }) {

      const navigate = useNavigate()

      const handleUsernameClick = async () => {
        if (mainUser) {
          await userPage.fetchUserData(user.id)  
          navigate('/user-page')
          // window.location.reload()
          if (onUserPage) {
            window.location.reload()
          }
        } else if (!mainUser) {
          await userPage.fetchUserData(userId)
          navigate('/user-page')
        }
      }  

      useEffect(() => {

      }, [userId])

      return (
        <div className={
            styles['user-info'] + ` ` + 
            (reverse? styles['user-info-reversed'] : '') + ` ` + 
            (isFriend? styles['user-info-friend'] : '')
            }>
            <span className={
                styles['avatar'] + ` `  + ` ` + 
                (comment === true? (styles['avatar-comment']) : '')}>
                </span>
            {
                mainUser
                  ?
                <span onClick={handleUsernameClick} className={styles['username']}>{username}</span>
                  : 
                <span onClick={handleUsernameClick} className={styles['username'] + ` ` + (comment === true? (styles['username-comment']) : '')}>{username}</span>
            }
        </div>
      )
  } 
