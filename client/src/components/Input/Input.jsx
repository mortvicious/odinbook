import React, {useState, useEffect} from 'react'
import styles from './Input.module.scss'
import user from '../../common/store/User'
import axios from 'axios'
// import useKeyPress from '../../common/hooks/useKeyPress'
import { useHotkeys } from 'react-hotkeys-hook'


export default function Input(props) {


    const [regBody, setRegBody] = useState({
        content: ''
    })

    const handleRegBody = (e) => {
        let value = e.target.value
        setRegBody({...regBody, content: value})
    }
    
    const handlePost = async () => {
        let content = regBody.content
        let login = user.username
        let userId = user.id
        try {
            const response = await axios.post('http://localhost:5000/api/post/add/', 
            {content, login, userId},
            {
                headers:{Authorization: `Bearer ${localStorage.getItem('token')}`},
            })
            window.location.reload()
        } catch (e) {
            console.log(e.response.data)
        }
    }

    // const handleKeySet = (e) => {
        // if (e.key === 'Control') {
        //     // console.log(e.key)
        //     handlePost()
        // }
    // }

    useEffect(() => {
        // console.log(regBody)        
    }, [regBody])

    // useEffect(() => {
    //     window.addEventListener('keydown', handleKeySet)
    //     return () => {
    //         window.removeEventListener('keydown', handleKeySet)
    //     }
    // })


    // const [keys, setKeys] = useState({
    //     enter: false,
    //     ctrl: false
    // })

    // const handleKeySet = (e) => {
    //     console.log(keys)
    //     if (e.key === 'Enter') {
    //         setKeys({...keys, enter: true})
    //     } else if (e.key === 'Control') {
    //         setKeys({...keys, ctrl: true})
    //     }
    //     if (keys.enter === true && keys.ctrl === true) {
    //         handlePost()
    //     }
    // }

    // useKeyPress(['Enter'], handleKeySet);
    // useHotkeys('a', handlePost)



    return (
      <div className={styles['input-container'] + ` ` + props.marginClass}>
          <textarea
              className={styles.Input + ` ` + props.className}
              placeholder={props.placeholder}
              onChange={handleRegBody}
              />
          <p className={styles['input-tip']}>Ctrl + Enter to send</p>
          <div className={styles['btn-container'] + ` ` + props.btnPos}>
              <span className={
                  styles['send-btn', 'attach-btn'].concat(` `) +
                  props.attachClass + ` ` +
                  props.display
                }>attach_file
               </span>
                <button className='no-styles' onClick={handlePost}><span className={styles['send-btn'] + " " + props.btnClass}>send</span></button>
          </div>
      </div>
    )
}
