import React, {useState, useEffect} from 'react'
import UserModel from '../../models/UserModel/UserModel'
import styles from './FriendModel.module.scss'
import user from '../../common/store/User'
import friend from '../../common/store/Friend'



const FriendModel = ({username, link, isRequest, candidateFriendId, userId}) => {

  // const [friend, setFriend] = useState({})

  const handleFriendRequest = async(e) => {
    const id = e.target.id
    if (id === 'accept') {
      friend.acceptFriendRequest(userId)
    } else if (id === 'decline') {
      friend.declineFriendRequest(userId)
    } 
  }

  const handleRemoveBtn = async() => {
    try {
      friend.removeFriend(userId)
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
    <div className={styles.Friend}>
      <UserModel
        username={username}
        link={link}
        isFriend={true}
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