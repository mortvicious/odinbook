import React, {useState, useEffect} from 'react'
import Header from '../../components/Header/Header'
import MainWrapper from '../../components/MainWrapper/MainWrapper'
import FriendModel from '../../models/FriendModel/FriendModel'
import styles from './Friends.module.scss'
import friend from '../../common/store/Friend'
import {toJS} from 'mobx'
import userPage from '../../common/store/UserPage'

export default function Friends(props) {

  // const [requestsFrom, setRequestsFrom] = useState([])
  const [requestsFrom, setRequestsFrom] = useState(toJS(friend.requests.from))
  const [displayRequestsFrom, setDisplayRequestsFrom] = useState([])

  const [friends, setFriends] = useState([])
  // const [displayFriends, setDisplayFriends] = useState([])
  const [displayFriends, setDisplayFriends] = useState([])


  const getUsersToDisplayInFriendRequestsFrom = () => {
    const _arr = [...displayRequestsFrom]
    requestsFrom.map(async(f) => {
      if (requestsFrom.length === 0) {
        console.log(`empty`)
        return
      } else {
        const _candidate = await userPage.fetchUserDataLite(f)
        _arr.push(
          // <FriendModel key={_candidate._id} isRequest={true} link='#' username={_candidate.login} userId={_candidate._id}/>
          {
            isRequest: true,
            link: '#',
            username: _candidate.login,
            userId: _candidate._id
          }
        )
        console.log(_arr)
      }
    })
    setDisplayRequestsFrom(_arr)
    // console.log(`displayRequestsFrom:`)
    // console.log(displayRequestsFrom)
  }

  const getUsersToDisplayInFriends = () => {
    const _arr = []
    friends.map(async(f) => {
      if (friends.length === 0) {
        return
      } else {
        const _friend = await userPage.fetchUserDataLite(f)
        _arr.push(
          <FriendModel link='#' username={_friend.username} userId={_friend._id}/>
        )
      }
    })
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
            <>{friend}</>
          )
        })
      )
    }
  }

  const check = () => {
    return (
      displayRequestsFrom.map((friendCandidate) => {
        return (
          <FriendModel isRequest={true} link={friendCandidate.link} username={friendCandidate.username} userId={friendCandidate.userId}/>
        )
      })
    )
  }

  const handleFriendRequestsSet = async() => {

  }

  function useForceUpdate(){
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update state to force render
    // An function that increment 👆🏻 the previous state like here 
    // is better than directly setting `value + 1`
}

  useEffect(() => {
    console.log(`requestsFrom.length === ${requestsFrom.length}`)
    // if (!requestsFrom.length === 0) {
    //   return 
    // } else if (requestsFrom.length === 0) {
    //   setRequestsFrom(toJS(friend.requests.from))
    //   if (toJS(friend.requests.from).length === 0) {
    //     const _arr = [...requestsFrom]
    //     _arr.push('0')
    //     setRequestsFrom(_arr)
    //   }
    // }
    // getUsersToDisplayInFriendRequestsFrom()
    if (displayRequestsFrom.length < 1 && requestsFrom.length > 0) {
      getUsersToDisplayInFriendRequestsFrom()
    }
    
  },
   [requestsFrom]
  )

  // useEffect(() => {
  //   if (displayRequestsFrom.length === 0 && requestsFrom.length > 0) {
  //     console.log(displayRequestsFrom)
  //     getUsersToDisplayInFriendRequestsFrom()
  //   }
  // }, [])

  // useEffect(() => {
  //   console.log(`rendered`)
  // }, [displayRequestsFrom])

  // useEffect(() => {
  //   console.log(`friends.length === ${friends.length}`)
  //   if (!friends.length === 0) {
  //     return 
  //   } else if (friends.length === 0) {
  //     setFriends(toJS(friend.friends))
  //     if (toJS(friend.friends).length === 0) {
  //       const _arr = [...friends]
  //       _arr.push('0')
  //       setFriends(_arr)
  //       return
  //     }
  //   }
  //   getUsersToDisplayInFriends()
  //   console.log(`display requests from:`)
  //   console.log(displayRequestsFrom)
  // }, [friends])
  const [ignored, forceUpdate] = React.useReducer(x => x + 1, 0);


  return (
      <MainWrapper>
        <div className={styles.Friends}>
          <Header/>
          <span className={styles['section-title']}>Requests:</span>
          <button onClick={() => console.log(displayRequestsFrom)}>DRF</button>
          <button onClick={forceUpdate}>FU</button>
          <div className={styles['friends-container']}>
          {/* {render.requests()} */}
          {/* {displayRequestsFrom} */}
          {check()}
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
