import { makeAutoObservable, toJS } from "mobx";
import axios from 'axios'
import PATH from '../routing/routes'
import user from './User'

class Friend {

    friends = []
    requests = {
        from: [],
        to: []
    }

    constructor() {
        makeAutoObservable(this)
    }

    setFriendsList = (friends) => {
        this.friends = friends
    }

    setRequestsFromList = (requestsFrom) => {
        this.requests.from = requestsFrom
    }
    setRequestsToList = (requestsTo) => {
        this.requests.to = requestsTo
    }

    sendFriendRequest = async(candidateFriendId) => {
        const userId = user.id
        try {
            const response = await axios.post('http://localhost:5000/api/user/friend:send',
            {candidateFriendId, userId},
            {
                headers:{Authorization: `Bearer ${localStorage.getItem('token')}`},
            })
          } catch(e) {
            console.log(e)
          }
    }

    acceptFriendRequest = async(candidateFriendId) => {
        const userId = user.id
        try {
            const response = await axios.patch('http://localhost:5000/api/user/friend-requests/accept',
            {candidateFriendId, userId},
            {
                headers:{Authorization: `Bearer ${localStorage.getItem('token')}`},
            })
          } catch(e) {
            console.log(e)
          }
    }

    declineFriendRequest = async(candidateFriendId, userId) => {
        try {
            const response = await axios.patch('http://localhost:5000/api/friend:decline',
            {candidateFriendId, userId},
            {
                headers:{Authorization: `Bearer ${localStorage.getItem('token')}`},
            })
          } catch(e) {
            console.log(e) 
          }
    }

    removeFriend = async(candidateFriendId, userId) => {
        try {
            const response = await axios.patch('http://localhost:5000/api/friend:remove',
            {candidateFriendId, userId},
            {
                headers:{Authorization: `Bearer ${localStorage.getItem('token')}`},
            })
          } catch(e) {
            console.log(e)
          }    
    }

    getFriendRequestList = async() => {
        const userId = user.id
        try {
            const response = await axios.post('http://localhost:5000/api/user/friend-requests/get',
            {userId},
            {
                headers:{Authorization: `Bearer ${localStorage.getItem('token')}`},
            })
            this.setRequestsFromList(response.data.from)
        } catch (e) {
            console.log(e)
        }
    }

    getFriendsList = async() => {
        const userId = user.id
        try {
            const response = await axios.post('http://localhost:5000/api/user/friends/get',
            {userId},
            {
                headers:{Authorization: `Bearer ${localStorage.getItem('token')}`},
            })
            // this.setFriendsList(response.data.friends)
            this.setFriendsList(response.data)
            console.log(`friend list GET`)
            // console.log(this.friends)
        } catch (e) {
            console.log(e)
        }
    }

    getFriend = async(friendId) => {
        const response = await axios.post('/user/friend-requests/get/user-info',
        {friendId},
        {
            headers:{Authorization: `Bearer ${localStorage.getItem('token')}`},
        })
        return response
    }


}


export default new Friend()