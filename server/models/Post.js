const {Schema, model, ObjectId} = require('mongoose')
const moment = require('moment')

const Post = new Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    userId: {type: ObjectId, required: true, ref: 'User'},
    login: {type: String, ref: 'User'},
    likes: {type: Array, default: []},
    dislikes: {type: Array, default: []},
    comments: {type: Array, default: []},
    date: {type: String, default: () => {
        return moment().format('D/MM/YYYY hh:mm')
    }}
})

module.exports = model('Post', Post )