import React from 'react'
import styles from './Tab.module.scss'

export default function AccountTab() {
  return (
    <div className={styles.AccountTab + ` ` + styles['tab']}>
      <h3 className={styles['setting-title']}>Account</h3>
      <div className={styles['settings-setting']}>
        <span className={styles['setting-name']}>Bio:</span>
        {/* <div>
          <textarea></textarea>
        </div> */}
        <span className={styles['change-settings']}>Change</span>
        {/* <label className="switch">
          <input type="checkbox"/>
          <span className="slider round"></span>
        </label> */}
      </div>
      <div className={styles['settings-setting']}>
        <span className={styles['setting-name']}>Email:</span>
        <span className={styles['change-settings']}>Change</span>
      </div>
      <div className={styles['settings-setting']}>
        <span className={styles['setting-name']}>Link:</span>
        <span className={styles['change-settings']}>Change</span>
      </div>
      <div className={styles['settings-setting']}>
        <span className={styles['setting-name']}>Username:</span>
        <span className={styles['change-settings']}>Change</span>
      </div>
      <div className={styles['settings-setting']}>
        <span className={styles['setting-name']}>Phone:</span>
        <span className={styles['change-settings']}>Change</span>
      </div>
    </div>
  )
}
