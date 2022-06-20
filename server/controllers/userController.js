const User = require('../models/User')
const fs = require('fs')
const config = require('config')

class UserController {


    async getFriendsRequestList (req, res) {
        try {
            const {userId} = req.body
            const user = await User.findById(userId)
            // console.log(user)
            return res.status(200).json(user.requests)
            // return res.status(200).json(`azazaza`)

        } catch (e) {
            res.status(400).json({message: 'Could not retrieve friend requests list'})
        }
    }
    
    friendRequest = {

        getFriendsRequestList: async (req, res) => {
            try {
                const {userId} = req.body
                console.log(user)
                const user = await User.findById(userId)
                return res.status(200).json(user)
                // return res.status(200).json(`azazaza`)

            } catch (e) {
                res.status(400).json({message: 'Could not retrieve friend requests list'})
            }
        },

        accept: async (req, res) => {
            try {
                const {candidateFriendId, userId} = req.body
    
                User.findByIdAndUpdate(
                        candidateFriendId,
                    {
                        $pull: {'requests.to' : userId},
                        $addToSet: {'friends' : userId}
                    }, {
                        new: true
                    }, function(err, affected) {
                        if(err)
                           console.log(err)
                        else
                           console.log(affected)
                    }
                )
    
                User.findByIdAndUpdate(
                        userId,
                    {
                        $pull: {'requests.from' : candidateFriendId},
                        $addToSet: {'friends' : candidateFriendId}
                    }, {
                        new: true
                    }, function(err, affected) {
                        if(err)
                           console.log(err)
                        else
                           console.log(affected)
                    }
                )

            } catch (e) {
                res.status(400).json({message: 'Error accepting friend request'})
            }
        },

        decline: async () => {
            try {
                const {candidateFriendId, userId} = req.body
                const user = await User.findById(userId)
                if (!user.requests.from.includes(candidateFriendId)) {
                    return res.json({message: 'Friend request not found'})
                }
                const index = user.requests.from.indexOf(candidateFriendId)
                if (index > -1) {
                    user.requests.from.splice(index, 1)
                }
                user.save()
                res.status(200).json(user.requests.from)
            } catch (e) {
                res.status(400).json({message: 'Error declining friend request'})
                
            }
        },

        send: async(req, res) => {
            try {
                const {candidateFriendId, userId} = req.body
    
                await User.findOneAndUpdate(
                    {
                        _id: candidateFriendId
                    }, 
                    {
                        $addToSet: {'requests.from' : userId}
                    }, {
                        new: true
                    }
                )
    
                await User.findOneAndUpdate(
                    {
                        _id: userId
                    }, 
                    {
                        $addToSet: {'requests.to' : candidateFriendId}
                    }, {
                        new: true
                    }
                )
    
            } catch (e) {
                res.status(400).json({message: 'Error sending friend request'})
            }
        }
    }
    
    friends = {

        async getFriendsList(req, res) {
            try {
                const {userId} = req.body
                const user = await User.findById(userId)
                return res.status(200).json(user.friends)
            } catch (e) {
                console.log(e)
            }
        },

        async removeFriend(req, res) {
            try {
                const {candidateFriendId, userId} = req.body
                const user = await User.findById(userId)
                if (!user.friends.includes(userId)) {
                    return res.json({message: 'Friend not found'})
                }
                const index = user.friends.indexOf(candidateFriendId)
                if (index > -1) {
                    user.friends.splice(index, 1)
                }
                user.save()
            } catch (e) {
                res.status(400).json({message: 'Error deleting friend'})
            }
        }
    }





    async updateBio(req, res) {
        
    }


    
    async changeSettings(req, res) {

    }



    async changeAvatar(req, res) {

    }

    async changeOnlineStatus(req, res) {
        
    }

    async getUserPosts(req, res) {

    }

    async getUserById(req, res) {
        try {
            const {userId} = req.body
            console.log(userId)
            const user = await User.findById(userId)
            res.status(200).json(user)
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new UserController()