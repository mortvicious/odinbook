const {Schema, model, ObjectId} = require('mongoose')
const Post = require('./Post')

const Comment = new Schema({
    post: {type: ObjectId, required: true, ref: Post},
    userId: {type: String, required: true},
    userLogin: {type: String, required: true},
    content: {type: String, required: true},
    likes: {type: Array, default: []},
    dislikes: {type: Array, default: []},
    date: {type: String, default: () => {
        return moment().format('D/MM/YYYY hh:mm')
    }}})

module.exports = model('Comment', Comment )