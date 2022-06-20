import React, {useState, useEffect} from 'react'
import UserModel from '../../models/UserModel/UserModel'
import styles from './Post.module.scss'
import user from '../../common/store/User'

export default function Comment(props) {

    const [likes, setLikes] = useState([])
    const [dislikes, setDislikes] = useState([])
    const [comment, setComment] = useState({})


    const handleLike = async () => {

    }

    const handleDislike = async () => {

    }

    useEffect(() => {
        setComment(props.comment)
    }, [])

  return (
    <div className={styles['comment']}>
        <div className={styles['username-wrapper']}>
            <UserModel userId={props.userId} comment={true} username={props.login} link='#'/>
        </div>
        <p className={styles['comment-content']}>{props.comment}</p>
        <div className={styles['comment-statistics']}>
            <div className={styles['wrapper-statistics']}>
              <span onClick={handleLike} className={styles['statistic-element']}><span className={(likes.includes(user.id)? styles['active-like'] : '') + " material-icons post neon"}>thumb_up</span> {likes.length}</span>
              <span onClick={handleDislike}className={styles['statistic-element']}><span className={(dislikes.includes(user.id)? styles['active-dislike'] : '') + " material-icons post neon"}>thumb_down</span> {dislikes.length}</span>
            </div>
        </div>
    </div>
  )
}
