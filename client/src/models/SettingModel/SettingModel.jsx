import React from 'react'
import styles from './SettingModel.module.scss'

export default function SettingModel({isSwitch, name, set, action}) {
  return (

    <div className={styles.SettingModel}>

        <span className={styles['name']}>{name}</span>

        {
        isSwitch
        ?
        <label className="switch">
          <input type="checkbox"/>
          <span className="slider round"></span>
        </label> 
        :
        <span className={styles['set']}>{set}</span>
        }


    </div>

  )
}
