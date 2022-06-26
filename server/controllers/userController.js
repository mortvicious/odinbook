const User = require('../models/User')
const fs = require('fs')
const config = require('config')
const UserService = require('../services/userService')

class UserController {


    async getFriendsRequestList (req, res) {
        try {
            const {userId} = req.body
            // const user = await User.findById(userId)
            const user = await UserService.findUser(userId)
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
                const {userId} = req.query
                const user = await User.findById(userId).select('requests')
                // const user = await UserService.findUser(userId, 'requests')
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

        decline: async (req, res) => {
            try {
                const {candidateFriendId, userId} = req.body
    
                User.findByIdAndUpdate(
                    candidateFriendId,
                    {
                        $pull: {'requests.to' : userId}
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
                        $pull: {'requests.from' : candidateFriendId}
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
                res.status(400).json({message: 'Error declining friend request'})
                
            }
        },

        send: async(req, res) => {
            try {
                const {candidateFriendId, userId} = req.body
    
                User.findByIdAndUpdate(
                    candidateFriendId,
                    {
                        $addToSet: {'requests.from' : userId}
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
                        $addToSet: {'requests.to' : candidateFriendId}
                    }, {
                        new: true
                    }, function(err, affected) {
                        if(err)
                           console.log(err)
                        else
                           console.log(affected)
                    }
                )

                return res.status(200).json({message: 'Request sent'})
    
            } catch (e) {
                res.status(400).json({message: 'Error sending friend request'})
            }
        }
    }
    
    friends = {

        async getFriendsList(req, res) {
            try {
                const {userId} = req.query
                // const user = await User.findById(userId).select('friends')
                const user = await UserService.findUser(userId, 'friends')
                return res.status(200).json(user)

            } catch (e) {
                console.log(e)
            }
        },

        async removeFriend(req, res) {
            try {
                const {candidateFriendId, userId} = req.body
    
                User.findByIdAndUpdate(
                        candidateFriendId,
                    {
                        $pull: {'friends' : userId},
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
                        $pull: {'friends' : candidateFriendId},
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
                res.status(400).json({message: 'Error deleting friend'})
            }
        },

        async getFriendInfo(req, res) {
            try {
                const {friendId} = req.query
                const user = await User.findById(friendId).select('login email _id link')
                // const user = await UserService.findUser(friendId, 'login email _id link')
                res.status(200).json(user)
            } catch {

            }
        }
    }

    
    
    async getUserById(req, res) {
        try {
            const {userId} = req.body
            const user = await User.findById(userId)
            res.status(200).json(user)
        } catch (e) {
            console.log(e)
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
}

module.exports = new UserController()