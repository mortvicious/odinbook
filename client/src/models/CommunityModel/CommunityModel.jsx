import React from 'react'
import styles from './CommunityModel.module.scss'
import { NavLink } from 'react-router-dom'

const CommunityModel = ({name, link, count}) => {
    return (
      <div className={styles.CommunityModel}>
                <NavLink to={link}><span className={styles['title']}>{name}</span></NavLink>
            <div className={styles['subscribers-container']}>
                <span className={styles['subscribers-count']}>{count}</span>
                <span className="material-icons func-m neon">people</span>
            </div>
      </div>
    )
}

export default CommunityModel