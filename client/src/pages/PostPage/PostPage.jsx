import React from 'react'
import styles from './PostPage.module.scss'
import Header from '../../components/Header/Header'
import PostModel from '../../models/PostModel/PostModel'
import user from '../../common/store/User'
import MainWrapper from '../../components/MainWrapper/MainWrapper'

export default function PostPage() {
  return (
    <MainWrapper>
      <div className={styles.PostPage}>
          <Header/>
          <PostModel
            username='superAwesomeGuy'
            link='#'
            content='some awesome lorem ipsom lmao'
            title='some title'
          />
          <div className={styles['comment-section']}>
      
          </div>
      </div>
    </MainWrapper>
  )
}
