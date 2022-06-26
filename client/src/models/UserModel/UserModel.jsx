import React, {useEffect} from 'react'
import styles from './UserModel.module.scss'
import { useNavigate } from 'react-router-dom'
import userPage from '../../common/store/UserPage'
import user from '../../common/store/User'
import {useParams} from 'react-router-dom'

export default function UserModel(
      {
        username, 
        link,
        reverse, 
        mainUser, 
        onClick, 
        comment, 
        isFriend,
        isRequest,
        userId,
        onUserPage
      }) {

      // urlUserId = userId
      const {urlUserId} = useParams()
      const navigate = useNavigate()

      const handleUsernameClick = async () => {
        if (mainUser) {
          await userPage.fetchUserData(user.id)  
          navigate('/user')
          // window.location.reload()
          if (onUserPage) {
            window.location.reload()
          }
        } else if (!mainUser) {
          await userPage.fetchUserData(userId)
          navigate(`/user:${userPage.link}`)
        }
      }  

      useEffect(() => {

      }, [userId])

      return (
        <div className={
            styles['user-info'] + ` ` + 
            (reverse? styles['user-info-reversed'] : '') + ` ` + 
            (isRequest? styles['user-info-request'] : '') + ` ` +
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
