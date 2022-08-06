import React, {useState, useEffect} from 'react'
import Input from '../Input/Input'
import UserModel from '../../models/UserModel/UserModel'
import styles from './Post.module.scss'
import axios from 'axios'
import user from '../../common/store/User'
import Comment from './Comment'

export default function Post(props) {

  const [postId, setPostId] = useState('')
  const [likes, setLikes] = useState([])
  const [dislikes, setDislikes] = useState([])
  const [comment, setComment] = useState('')
  const [comments, setComments] = useState(['0'])
  const [userId, setUserId] = useState('')

  const handleLike = async() => {
    const userId = user.id
    try {
      const response = await axios.post('http://localhost:5000/api/post/like/',
      {postId, userId},
      {
          headers:{Authorization: `Bearer ${localStorage.getItem('token')}`},
      })
      setLikes(response.data.likes)
      setDislikes(response.data.dislikes)
  } catch (e) {
      console.log(e)
    }
  }



  const handleDislike = async() => {
    const userId = user.id
    try {
      const response = await axios.post('http://localhost:5000/api/post/dislike/',
      {postId, userId},
      {
          headers:{Authorization: `Bearer ${localStorage.getItem('token')}`},
      })
      setDislikes(response.data.dislikes)
      setLikes(response.data.likes)
  } catch (e) {
      console.log(e)
    }
  }



  const handleAddComment = async(event) => {
    // event.preventDefault()
    const userLogin = user.username
    const userId = user.id
    const commentContent = comment
    try {
      const response = await axios.patch('http://localhost:5000/api/post/add/comment',
      {postId, userId, userLogin, commentContent},
      {
        headers:{Authorization: `Bearer ${localStorage.getItem('token')}`},
    })
    } catch (e) {

    }
  }



  const handleCommentChange = (e) => {
    const value = e.target.value
    setComment(value)
  }

  const renderComments = () => {
    return (
      comments.map((com) => {
        return (
          <Comment
            comment={com.content}
            login={com.login}
            userId={userId}
          />
        )
      })
    )
  }

  useEffect(() => {
    setPostId(props.id)
    setLikes(props.likes)
    setDislikes(props.dislikes)
    setComments(props.comments)
    setUserId(props.userId)
  }, [])

  return (
    <div className={styles.Post}>
        <div className={styles['post-user']}>
            <UserModel userId={userId} username={props.username} link='#'/>
            <span className={styles['statistic-element'] + ` ` + styles['date']}>{props.date}</span>

        </div>
        <p className={styles['post-text']}>{props.text}</p>
        <span className={styles['post-more']}>. . .</span>
        <div className={styles['post-statistics']}>
            <div className={styles['wrapper-statistics']}>
              <span onClick={handleLike} className={styles['statistic-element']}><span className={(likes.includes(user.id)? styles['active-like'] : '') + " material-icons post neon"}>thumb_up</span> {likes.length}</span>
              <span onClick={handleDislike}className={styles['statistic-element']}><span className={(dislikes.includes(user.id)? styles['active-dislike'] : '') + " material-icons post neon"}>thumb_down</span> {dislikes.length}</span>
              <span className={styles['comments'] + ` ` + styles['statistic-element']}><span className="material-icons post neon">mode_comment</span> {comments.length}</span>
            </div>
        </div>
        <div className={styles['comment-section']}>
          {renderComments()}
        </div>
        <form onSubmit={handleAddComment} className={styles['post-comment-container']}>
          <input onChange={handleCommentChange} className={styles['post-comment-input']} />
            <span onClick={handleAddComment} className='material-icons post neon'>send</span>
        </form>
    </div>
  )
}

