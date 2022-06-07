import React from 'react'
import styles from './Input.module.scss'

export default function Input(props) {
    return (
      <div className={styles['input-container'] + ` ` + props.marginClass}>
          <textarea
              className={styles.Input + ` ` + props.className}
              placeholder={props.placeholder}
              />
          <span className={styles['send-btn'] + " " + props.btnClass}>send</span>
          <span className={
                styles['send-btn', 'attach-btn'].concat(` `) + 
                props.attachClass + ` ` + 
                props.display
            }>attach_file
           </span>
      </div>
    )
}
