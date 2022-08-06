import React, {useState, useEffect} from 'react'
import UserModel from '../../models/UserModel/UserModel'
import styles from './FriendModel.module.scss'
import user from '../../common/store/User'
import friend from '../../common/store/Friend'



const FriendModel = ({username, link, isRequest, isFriend, candidateFriendId, userId}) => {

  const handleFriendRequest = async(e) => {
    const id = e.target.id
    if (id === 'accept') {
      friend.acceptFriendRequest(userId)
      window.location.reload()
    } else if (id === 'decline') {
      friend.declineFriendRequest(userId)
      window.location.reload()
    } 
  }

  const handleRemoveBtn = async() => {
    try {
      friend.removeFriend(userId)
      window.location.reload()
    } catch {

    }
  }

  const getRequests = async() => {
    try {

    } catch (e) {

    }
  }

  const getFriends = async() => {
    try {

    } catch (e) {
      
    }
  }

  const render = {
    requests: async() => {
      try {

      } catch (e) {

      }
    },
    friends: async() => {
      try {

      } catch (e) {
        
      }
    }
  }

  useEffect(() => {

  }, [])

  return (
    <div className={
        styles.Friend + ` ` +
        (isFriend? styles['friend_'] : '') 
        }>
      <UserModel
        username={username}
        link={link}
        isRequest={true}
        isFriend={isRequest? true : false}
        userId={userId}
      />
      <div className={styles['functional-container']}>
        {
          isRequest ?
          <>
        <button id='accept' onClick={handleFriendRequest} className={styles['functional-btn']}>Accept</button>
        <button id='decline' onClick={handleFriendRequest} className={styles['functional-btn']}>Decline</button>
          </>
          :
          <>
        <button id='remove' onClick={handleRemoveBtn} className={styles['functional-btn']}>Remove</button>
        <button className={styles['functional-btn']}>Message</button>
          </>
        }
      </div>
    </div>
  )
}

export default FriendModel