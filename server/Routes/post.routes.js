const Router = require('express')
// const Post = require('../models/Post')
// const jwt = require('jsonwebtoken')
const authMiddleware = require('../middleware/auth.middleware')
const postController = require('../controllers/postController')

const router = new Router()

router.post('/add', authMiddleware, postController.addPost)

router.get('/feed/get/', authMiddleware, postController.getPosts)

router.get('/posts/', authMiddleware, postController.getUserPosts)

router.get('/feed/', authMiddleware, postController.getPosts)

router.post('/delete-all/', postController.deleteAllPosts)

router.post('/like', authMiddleware, postController.addLike)
router.post('/dislike', authMiddleware, postController.addDislike)
router.patch('/add/comment', postController.addComment)

module.exports = router