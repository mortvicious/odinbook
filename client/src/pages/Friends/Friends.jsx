import React, {useState, useEffect} from 'react'
import Header from '../../components/Header/Header'
import MainWrapper from '../../components/MainWrapper/MainWrapper'
import FriendModel from '../../models/FriendModel/FriendModel'
import styles from './Friends.module.scss'
import friend from '../../common/store/Friend'
import {toJS} from 'mobx'
import userPage from '../../common/store/UserPage'

export default function Friends(props) {

  const [requestsFrom, setRequestsFrom] = useState(toJS(friend.requests.from))
  const [displayRequestsFrom, setDisplayRequestsFrom] = useState([])

  const [friends, setFriends] = useState(toJS(friend.friends))
  // const friends = toJS((friend.friends))
  const [displayFriends, setDisplayFriends] = useState([])


  const getUsersToDisplayInFriendRequestsFrom = async () => {
    const _arr = [...displayRequestsFrom]
    for (let f of requestsFrom) {
      const _candidate = await userPage.fetchUserDataLite(f)
      _arr.push(
        {
          isRequest: true,
          link: '#',
          username: _candidate.login,
          userId: _candidate._id
        }
      )
    }
    setDisplayRequestsFrom(_arr)
    }

  const getUsersToDisplayInFriends = async() => {
    const _arr = [...displayFriends]
    for (let f of friends) {
      // const _friend = await userPage.fetchUserDataLite(f)
      const _friend = await friend.getFriend(f)
      _arr.push(
        {
          isFriend: true,
          link: '#',
          username: _friend.login,
          userId: _friend._id
        }
      )
    }
    setDisplayFriends(_arr)
  }

  const render = {
    requests: () => {
      return (
        displayRequestsFrom.map((friendCandidate) => {
          return (
            <FriendModel isRequest={true} link={friendCandidate.link} username={friendCandidate.username} userId={friendCandidate.userId}/>
          )
        })
      )
    },
    friends: () => {
      return (
        displayFriends.map((friend) => {
          return (
            <FriendModel link={friend.link} username={friend.username} userId={friend.userId}/>
          )
        })
      )
    }
  }




  useEffect(() => {
    if (displayRequestsFrom.length < 1 && requestsFrom.length > 0) {
      getUsersToDisplayInFriendRequestsFrom()
    }
  }, [requestsFrom])

  useEffect(() => {
      getUsersToDisplayInFriends()
  }, [friends])



  return (
      <MainWrapper>
        <div className={styles.Friends}>
          <Header/>
          <span className={styles['section-title']}>Requests:</span>
          {/* <button onClick={() => console.log(displayRequestsFrom)}>DRF</button> */}
          {/* <button onClick={forceUpdate}>FU</button> */}
          <div className={styles['friends-container']}>
          {render.requests()}
          {/* {displayRequestsFrom} */}
          {/* {check()} */}
          </div>
          <span className={styles['section-title']}>Friends:</span>
          {render.friends()}
          <div className={styles['friends-container']}>
          {/* <FriendModel link='#' username='someuser3' />
          <FriendModel link='#' username='someuser2' />
          <FriendModel link='#' username='someuser1' />
          <FriendModel link='#' username='someuser1' />
          <FriendModel link='#' username='someuser1' />
          <FriendModel link='#' username='someuser1' />
          <FriendModel link='#' username='someuser1' />
          <FriendModel link='#' username='someuser1' /> */}
          </div>
        </div>
      </MainWrapper>
  )
}
