import React, {useState, useEffect} from 'react'
import styles from './CommentModel.styles.scss'
import UserModel from '../UserModel/UserModel'
import user from '../../common/store/User'

export default function CommentModel({feedPost, login, content}) {
  const [likes, setLikes] = useState([])
  const [dislikes, setDislikes] = useState([])
  const [comment, setComment] = useState({})


  const handleLike = async () => {

  }

  const handleDislike = async () => {

  }

  useEffect(() => {
      setComment(content)
      console.log(comment)
  }, [])

  return (
    feedPost ? 
    <div className={styles.CommentModel}>
        <div className={styles['username-wrapper']}>
            <UserModel comment={true} username={login} link='#'/>
        </div>
        <p className={styles['comment-content']}>{content}</p>
        <div className={styles['comment-statistics']}>
            <div className={styles['wrapper-statistics']}>
              <span onClick={handleLike} className={styles['statistic-element']}><span className={(likes.includes(user.id)? styles['active-like'] : '') + " material-icons post neon"}>thumb_up</span> {likes.length}</span>
              <span onClick={handleDislike}className={styles['statistic-element']}><span className={(dislikes.includes(user.id)? styles['active-dislike'] : '') + " material-icons post neon"}>thumb_down</span> {dislikes.length}</span>
            </div>
        </div>
    </div>
    :
      <div>

      </div>
  )
}
