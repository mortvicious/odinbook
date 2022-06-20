import React, {useState, useEffect} from 'react'
import styles from './Feed.module.scss'
import Post from '../Post/Post'
import Input from '../Input/Input'
import Header from '../Header/Header'
import axios from 'axios'

const Main = () => {
    
    const [posts, setPosts] = useState([])
        
    const renderPosts = () => {
            return(
                posts.map((post) => {
                    return (
                        <Post
                        key={post._id}
                        username={post.login}
                        title={post.title}
                        text={post.content}
                        likes={post.likes}
                        dislikes={post.dislikes}
                        comments={post.comments}
                        date={post.date}
                        id={post._id}
                        userId={post.userId}
                        />
                    )
                })
            )
    }

    useEffect(() => {
        const getPosts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/post/feed/',
                {
                    headers:{Authorization: `Bearer ${localStorage.getItem('token')}`},
                })
                setPosts(response.data)
            } catch (e) {
                console.log(e)
            }
        }
        getPosts()
    }, [])

    return (
        <div className={styles.Main}>
            <Input
                className={styles['post-message']}
                marginClass={styles['post-message-m']}
                btnClass='material-icons post mim neon'
                attachClass={styles['post-message-attach-icon'] +' material-icons post mim d-b'}
                placeholder='Share whatever you want!'
                btnPos={styles['btn-pos']}
            />
            <div className={styles['posts']}>
                {renderPosts()}
            </div>
        </div>
    )
}

const DELETE_ALL = async() => {

}

export default function Feed() {
  return (
    <div className={styles.Feed}>
        <Header/>
        {/* <div className={styles['debug']}>
            <button onClick={DEBUG_GET}>GET ALL POSTS</button>
            <button onClick={DEBUG_FEED}>GET FEED UPDATE</button>
            <button onClick={DEBUG_GETUSERLOGIN}>GET USER LOGIN</button>
            <button onClick={DEBUG_DELETEALLPOSTS}>DELETE ALL POSTS</button>
        </div> */}
        <Main/>
    </div>
  )
}
