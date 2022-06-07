import React from 'react'
import styles from './Header.module.scss'
import user from '../../common/store/User'

const Header = () => {
    return (
        <div className={styles.Header}>
            <h4 className={styles.title}>Odinbook</h4>
            <ul className={styles['functional-menu']}>
                <span class="material-icons func-m">home</span>
                <span class="material-icons func-m">person</span>
                <span class="material-icons func-m">people</span>
                <span class="material-icons func-m">chat</span>
                <span class="material-icons func-m">settings</span>
            </ul>
            <div className={styles['user-container']}>
                <p className={styles['username']}>{user.username}</p>
                <span className={styles['user-avatar']}></span>
            </div>
        </div>
    )
}

export default Header