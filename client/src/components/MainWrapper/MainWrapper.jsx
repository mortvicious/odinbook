import React, {useState, useEffect} from 'react'
import styles from './MainWrapper.module.scss'

export default function MainWrapper(props) {
  
  const [isFullHeight, setFullHeight] = useState(false)

  useEffect(() => {
    setFullHeight(props.fullHeight)
  }, [props.fullHeight])

  return (
    <div 
      className={
        styles.MainWrapper
        + ` ` +
        (isFullHeight ? 'mh-100' : '')
      }>
      {props.children}
    </div>
  )
}
