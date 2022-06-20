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

}

module.exports = new UserService()