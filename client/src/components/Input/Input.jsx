import React, {useState, useEffect} from 'react'
import styles from './Input.module.scss'
import user from '../../common/store/User'
import axios from 'axios'

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
