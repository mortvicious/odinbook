const {Schema, model} = require('mongoose')

const User = new Schema({
    email: {type: String, required: true, unique: true},
    login: {type: String, required: true},
    password: {type: String, required: true},
    link: {type: String, required: true},
    avatar: {type: String},
    bio: {type: String},
    status: {type: String, default: 'offline'},
    friends: {type: Array, default: []},
    communities: {type: Array, default: []},
    requestsTo: {type: Array, default: []},
    requestsFrom: {type: Array, default: []},
    requests: {type: Object, default: {
        to: [],
        from: []
    }},
    posts: {type: Array, default: []},
    settings: {type: Array, default: []},
    registrationDate: {type: String, default: Date.now()}
})

module.exports = model('User', User )