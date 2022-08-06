import React, {useEffect, useState} from 'react'
import Header from '../../components/Header/Header'
import styles from './UserPage.module.scss'
import user from '../../common/store/User'
import MainWrapper from '../../components/MainWrapper/MainWrapper'
import userPage from '../../common/store/UserPage'
import Post from '../../components/Post/Post'
import friend from '../../common/store/Friend'

export default function UserPage(props) {

  const posts = userPage.posts
  const renderPosts = () => {
    return(
        posts.map((post) => {
            return (
                <Post
                key={post._id}
                username={post.login}
                title={post.title}
                text={post.content}
                likes={post.likes}
                dislikes={post.dislikes}
                comments={post.comments}
                date={post.date}
                id={post._id}
                userId={post.userId}
                />
            )
        })
    )
}

const handleSendRequestFriendBtn = async (e) => {
    e.preventDefault()
    await friend.sendFriendRequest(userPage.id)
    console.log(`friend request from ${userPage.id} to ${user.id}`)
}

  useEffect(() => {
    
  }, [])

  return (
    <MainWrapper>
      <div className={styles.UserPage}>
        <Header onUserPage={true}/>
          <div className={styles["user-info"]}>
            <div className={styles["avatar"]}></div>
              <div className={styles["user-statistics"]}>
                <div className={styles["user-username-status"]}>
                  <span className={styles["username"]}>{userPage.username}</span>
                  <span className={styles["status"]}></span>
                </div>
                <span className={styles["last-seen"]}>Last seen recently</span>
                <div className={styles["bio-container"]}>
                  <span className={styles["bio"]}>
                {userPage.bio}
                </span>
                </div>
              </div>
          </div>
          <div className={styles['functional-container']}>
            <button onClick={handleSendRequestFriendBtn} className={styles['functional-btn'] + ` ` + styles["request-friend"]}>Request</button>
            <button className={styles['functional-btn'] + ` ` + styles["send-message"]}>Message</button>
            <button className={styles['functional-btn'] + ` ` + styles["friends-page"]}>Friends</button>
            <button className={styles['functional-btn'] + ` ` + styles["communities-page"]}>Communities</button>
            <button className={styles['functional-btn'] + ` ` + styles["subscribers-page"]}>Subscribers</button>
          </div>
          <div className={styles["user-posts"]}>
            {renderPosts()}
          </div>
      </div>
    </MainWrapper>
  )
}
