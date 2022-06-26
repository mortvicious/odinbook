import { makeAutoObservable } from "mobx";
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
            const response = await axios.post('http://localhost:5000/api/user/friend-requests/send',
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

    declineFriendRequest = async(candidateFriendId) => {
        try {
            const userId = user.id
            const response = await axios.patch('http://localhost:5000/api/user/friend-requests/decline',
            {candidateFriendId, userId},
            {
                headers:{Authorization: `Bearer ${localStorage.getItem('token')}`},
            })
          } catch(e) {
            console.log(e) 
          }
    }

    removeFriend = async(candidateFriendId) => {
        try {
            const userId = user.id
            const response = await axios.patch('http://localhost:5000/api/user/friend/remove',
            {candidateFriendId, userId},
            {
                headers:{Authorization: `Bearer ${localStorage.getItem('token')}`},
            })
            console.log(`remove friend with id ${candidateFriendId}`)
          } catch(e) {
            console.log(e)
          }    
    }

    // getFriendRequestList = async() => {
    //     const userId = user.id
    //     try {
    //         const response = await axios.post('http://localhost:5000/api/user/friend-requests/get',
    //         {userId},
    //         {
    //             headers:{Authorization: `Bearer ${localStorage.getItem('token')}`},
    //         })
    //         this.setRequestsFromList(response.data.from)
    //     } catch (e) {
    //         console.log(e)
    //     }
    // }

    getFriendRequestList = async() => {
        const userId = user.id
        try {
            const response = await axios.get('http://localhost:5000/api/user/friends/requests', 
            {
                params: {userId},
                headers:{Authorization: `Bearer ${localStorage.getItem('token')}`},
            })
            this.setRequestsFromList(response.data.requests.from)
            console.log(response)
        } catch (e) {
            console.log(e)
        }
    }

    getFriendsList = async() => {
        const userId = user.id
        try {
            const response = await axios.get('http://localhost:5000/api/user/friends',
            {
                params: {userId},
                headers:{Authorization: `Bearer ${localStorage.getItem('token')}`},
            })
            // this.setFriendsList(response.data.friends)
            this.setFriendsList(response.data.friends)
        } catch (e) {
            console.log(e)
        }
    }

    getFriend = async(friendId) => {
        try {
            const response = await axios.get('http://localhost:5000/api/user/friend',
            // {friendId},
            {
                params: {friendId},
                headers:{Authorization: `Bearer ${localStorage.getItem('token')}`},
            })
            return response.data
        } catch (e) {
            console.log(e)
        }
    }


}


export default new Friend()