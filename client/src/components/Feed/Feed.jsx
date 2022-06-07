import React from 'react'
import styles from './Feed.module.scss'
import Post from '../Post/Post'
import Input from '../Input/Input'
import Header from '../Header/Header'

const Main = () => {
    return (
        <div className={styles.Main}>
            <Input
                className={styles['post-message']}
                marginClass={styles['post-message-m']}
                btnClass='material-icons post mil'
                attachClass={styles['post-message-attach-icon'] +' material-icons post mil d-b'}
                placeholder='Share whatever you want!'
                
            />
            <div className={styles['posts']}>
                <Post
                    username='JackieLove17'
                    title='I wanna talk about my kinks..))'
                    text='So guys, yesterday I had a company of 43 mens, we drunk a good wine and had love. Actually, I had love 43 times...'
                    likes='57'
                    dislikes='772'
                    comments='13'
                    date='06.05.2022'
                />
                            <Post
                    username='britscottclark'
                    title='Do you guys feel it`s getting hotter..'
                    text='It`s 80 degrees fck'
                    likes='5143'
                    dislikes='2'
                    comments='145'
                    date='01.05.2022'
                />
                            <Post
                    username='QuentyTaranti'
                    title='So about that film'
                    text='A pregnant assassin, code-named The Bride, goes into a coma for four years after her ex-boss Bill brutally attacks her. When she wakes up, she sets out to seek revenge on him and his associates.'
                    likes='5245'
                    dislikes='1'
                    comments='1535'
                    date='25.04.2022'
                />
            </div>
        </div>
    )
}

export default function Feed() {
  return (
    <div className={styles.Feed}>
        <Header/>
        <Main/>
    </div>
  )
}
