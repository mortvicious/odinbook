import React, {useState} from 'react'
import Header from '../../components/Header/Header'
import MainWrapper from '../../components/MainWrapper/MainWrapper'
import styles from './Communities.module.scss'
import CommunityModel from '../../models/CommunityModel/CommunityModel'



export default function Communities() {

  const [overlay, setOverlay] = useState(false)

  const handleCreateCommunity = () => {
    setOverlay(!overlay)
  }

  return (
      <MainWrapper>
        <div className={styles.Communities}>
          <Header/>
          <div className={styles['header-section']}>
            <span className={styles['title']}>Communities:</span>
            <span onClick={handleCreateCommunity} className={styles['title'] + ` ` + styles['add-btn']}>+</span>
          </div>
          <div className={styles['communities-container']}>
            <CommunityModel count='43' name='Big Cool Awesome Community' link='#'/>
            <CommunityModel count='11594' name='Margot Robbie' link='#'/>
            <CommunityModel count='153' name='Lithuanian Racers' link='#'/>

        </div>
        
          <div className={styles['create-community-overlay'] + ` ` + (overlay? styles['overlay-visible'] : '')}>
            <span className={styles['create-community-title']}>Create new community</span>
            <form className={styles['create-community-form']}>
              <input type="text" placeholder='Title' />
              <textarea placeholder='Description' id=""/>
              <button className={styles['create-community-btn']}>Create community</button>
            </form>
            <span onClick={handleCreateCommunity} className={styles['close-community']}>+</span>
          </div>
        </div>
      </MainWrapper>
  )
}
