import React from 'react'
import styles from './Header.module.scss'
import user from '../../common/store/User'
import UserModel from '../../models/UserModel/UserModel'
import { NavLink, useNavigate } from 'react-router-dom'
import friend from '../../common/store/Friend'
const Header = ({username, onUserPage}) => {

    const navigate = useNavigate()

    const handleLogoutBtn = () => {
        user.logout()

    }



    const handleFriendsBtn = async() => {
        await friend.getFriendRequestList()
        await friend.getFriendsList()
        navigate('/friends')
    }


    return (
        <div className={styles.Header}>
            <NavLink to='/'>
                <h4 className={styles.title}>C</h4>
            </NavLink>
            <ul className={styles['functional-menu']}>
                <NavLink to='/'><span className="material-icons func-m neon">home</span></NavLink>
                <NavLink to='/search'><span className="material-icons func-m neon">search</span></NavLink>
                {/* <NavLink to='/friends'><span className="material-icons func-m neon">person</span></NavLink> */}
                <span onClick={handleFriendsBtn} className="material-icons func-m neon">person</span>
                <NavLink to='/communities'><span className="material-icons func-m neon">people</span></NavLink>
                <NavLink to='/messages'><span className="material-icons func-m neon">chat</span></NavLink>
                <NavLink to='/settings'><span className="material-icons func-m neon">settings</span></NavLink>
                <NavLink to='/'><span onClick={handleLogoutBtn} className="material-icons func-m neon">logout</span></NavLink>
            </ul>
            <div className={styles['user-container']}>
                <UserModel 
                    mainUser={true} 
                    // onClick={user.logout} 
                    username={user.username}
                    // username={username}
                    reverse={true} 
                    link='user-page' 
                    onUserPage={onUserPage}
                    // userId={user.id}  
                />
            </div>
        </div>
    )
}

export default Header