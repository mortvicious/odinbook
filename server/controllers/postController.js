const Post = require('../models/Post')
const Comment = require('../models/Comment')
const User = require('../models/User')


class PostController {

    async addPost(req, res) {
        try {
            const {content, login, userId} = req.body
            const title = content.slice(0, 20) + `...`
            const post = new Post({title, content, userId : req.user.id, login })
            await post.save()
            const user = await User.findById(req.user.id)
            user.posts.push(post)
            await user.save()
            return res.status(200).json(post)
        } catch (e) {
            res.status(400).json({message: 'Error occured, post has not been created'})
        }
    }

    async addComment(req, res) {
        try {
            const {postId, userId, userLogin, commentContent} = req.body
            const post = await Post.findById(postId)
            // console.log(post)
            const comments = post.comments
            const newComment = {
                user: userId,
                login: userLogin,
                content: commentContent,
            }
            comments.push(newComment)
            post.save()
            // console.log(post)
            return res.json(post.comments)
        } catch (e) {
            res.status(400).json({message: 'Could not receive comment'})
        }
    }



    async deletePost(req, res) {
        
    }

    async getPosts(req, res) {
        try {
            const posts = await Post.find({}).sort({_id: -1})
            res.json(posts)
        } catch (e) {
            res.status(400).json({message: 'Server error, cannot GET posts'})
        }
    }

    async getPost(req, res) {
        try {

        } catch (e) {
            res.status(400).json({message: 'Server error, cannot GET post'})
        }
    }


    async getUserPosts(req, res) {
        try {
            const posts = await Post.find({userId: req.user.id})
            return res.json(posts)
        } catch (e) {
            res.status(400).json({message: 'Could not retrieve posts'})
        }
    }


    async addLike(req, res) {
        try {
            const {postId, userId} = req.body
            const post = await Post.findById(postId)
            if (!post.likes.includes(userId)) {
                const index = post.dislikes.indexOf(userId)
                if (index > -1) {
                    post.dislikes.splice(index, 1)
                }
                post.likes.push(userId)
            } else if (post.likes.includes(userId)) {
                const index = post.likes.indexOf(userId)
                if (index > -1) {
                    post.likes.splice(index, 1)
                }
            }
            post.save()
            return res.json(post)

        } catch (e) {
            res.status(400).json({message: 'Could not like post'})
        }
    }

    async addDislike(req, res) {
        try {
            const {postId, userId} = req.body
            const post = await Post.findById(postId)
            if (!post.dislikes.includes(userId)) {
                const index = post.likes.indexOf(userId)
                if (index > -1) {
                    post.likes.splice(index, 1)
                }
                post.dislikes.push(userId)
            } else if (post.dislikes.includes(userId)) {
                const index = post.dislikes.indexOf(userId)
                if (index > -1) {
                    post.dislikes.splice(index, 1)
                }
            }
            post.save()
            return res.json(post)

        } catch (e) {
            res.status(400).json({message: 'Could not like post'})
        }
    }


    //DEBUG
    async deleteAllPosts(req, res) {
        try {
            const posts = await Post.findMany({})
            posts.remove({})
        } catch (e) {
            res.status(400).json({message: 'Could not delete posts'})
        }
    }

}


module.exports = new PostController()