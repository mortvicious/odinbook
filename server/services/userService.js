const User = require('../models/User')
const fs = require('fs')
const config = require('config')

class UserService {

    createDir() {
        const path = `${config.get('assetsPath')}/${User.email}`
    }

    getUserById(id) {
        
    }

    removeFromRequests() {

    }

    findUser = async(userId, selects) => {
        if (!selects) {
            const user = await User.findById(userId)
            return user
        }
        const user = await User.findById(userId).select(selects)
        return user
    }

}

module.exports = new UserService()