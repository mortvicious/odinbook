const {Schema, model, ObjectId} = require('mongoose')

const Community = new Schema({
    name: {type: String, required: true, unique: true},
    owner: {type: ObjectId, required: true, unique: true},
    admins: {type: Array, default: []},
    posts: {type: Array, default: []},
    
})

module.exports = model('Community', Community )