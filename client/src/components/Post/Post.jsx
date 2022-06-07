import React from 'react'
import Input from '../Input/Input'
import styles from './Post.module.scss'

export default function Post(props) {
  return (
    <div className={styles.Post}>
        <div className={styles['post-user']}>
            <div className={styles['post-user-info']}>
              <span className={styles['post-user-avatar']}></span>
              <p className={styles['post-user-username']}>{props.username}</p>
            </div>
            <p className={styles['post-user-title']}>{props.title}</p>
        </div>
        <p className={styles['post-text']}>{props.text}</p>
        <span className={styles['post-more']}>. . .</span>
        <div className={styles['post-statistics']}>
            <div className={styles['wrapper-statistics']}>
              <span className={styles['statistic-element']}><span class="material-icons post">thumb_up</span> {props.likes}</span>
              <span className={styles['statistic-element']}><span class="material-icons post">thumb_down</span> {props.dislikes}</span>
              <span className={styles['comments'] + ` ` + styles['statistic-element']}><span class="material-icons post">mode_comment</span> {props.comments}</span>
            </div>
            <span className={styles['statistic-element'] + ` ` + styles['date']}>{props.date}</span>
        </div>
        <Input
          className={styles['post-comment-input']}
          marginClass={styles['post-comment-container']}
          btnClass='material-icons post'
        />
    </div>
  )
}

