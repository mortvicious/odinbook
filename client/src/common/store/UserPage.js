import { makeAutoObservable } from "mobx";
import axios from 'axios'
import PATH from '../routing/routes'

class UserPage {

    user = {}
    username = ''
    error = null
    id = ''
    link = ''
    bio = ''
    posts = []
    friends = []
    communities = []

    constructor() {
        makeAutoObservable(this)
    }

    setUserPage = async(username, id, link, friends, communities, bio, posts) => {
        try {
            this.username = username
            this.id = id
            this.link = link
            this.friends = friends
            this.communities = communities
            this.bio = bio
            this.posts = posts
        } catch {

        }
    }

    fetchUserData = async(userId) => {
        try {
            const user = await axios.post('http://localhost:5000/api/user/get',
            {userId},
            {
                headers:{Authorization: `Bearer ${localStorage.getItem('token')}`},
            })
            this.user = user.data
            this.setUserPage(
                user.data.login, 
                user.data._id, 
                user.data.link, 
                user.data.friends, 
                user.data.communities,
                user.data.bio,
                user.data.posts
                )
            console.log(user.data)
        } catch (e) {
            console.log(e)
        }
    }

    fetchUserDataLite = async(userId) => {
        try {
            const user = await axios.post('http://localhost:5000/api/user/get',
            {userId},
            {
                headers:{Authorization: `Bearer ${localStorage.getItem('token')}`},
            })
            return user.data
        } catch (e) {
            console.log(e)
        }
    }


}

export default new UserPage()