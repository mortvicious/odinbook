import React from 'react'
import UserModel from '../UserModel/UserModel'
import styles from './PostModel.module.scss'

export default function PostModel({username, content, link}) {
  return (
    <div className={styles.PostModel}>
        <UserModel username={username} link={link}/>
        <div className={styles['post']}>
          {/* <h2 className={styles['title']}>{title}</h2> */}
          {/* {content} */}
          <p className={styles['content']}>  
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat voluptas et minus, iusto accusamus, ea voluptatum ex nemo impedit eligendi, beatae sequi quisquam aut sapiente perspiciatis aliquid illum esse explicabo!     
          </p>
        </div>
        <div className={styles['functional-container']}></div>
        <div className={styles['comments-section']}> </div>
    </div>

  )
}
