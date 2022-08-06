import React from 'react'
import styles from './Tab.module.scss'
import SettingModel from '../../../models/SettingModel/SettingModel'

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
      <SettingModel
        name='Name:'
        set='Change'
      />
      <SettingModel
        name='Link:'
        set='Change'
      />
      <SettingModel
        name='Username:'
        set='Change'
      />
      <SettingModel
        name='Phone:'
        set='Change'
        isSwitch={true}
      />
    </div>
  )
}
