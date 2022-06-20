const Router = require('express')
const authMiddleware = require('../middleware/auth.middleware')
const userController = require('../controllers/userController')

const router = new Router()

// router.post('/add', authMiddleware, postController.addPost)

// router.get('/feed/get/', authMiddleware, postController.getPosts)

router.post('/get', authMiddleware, userController.getUserById)

router.post('/friend:send', authMiddleware, userController.friendRequest.send)

router.post('/friend-requests/get', authMiddleware, userController.getFriendsRequestList)
router.post('/friend-requests/get/user-info', authMiddleware, userController.getUserById)
router.patch('/friend-requests/accept', authMiddleware, userController.friendRequest.accept)
router.post('/friends/get', authMiddleware, userController.friends.getFriendsList)


router.patch('/friend:decline', authMiddleware, userController.friendRequest.decline)
router.patch('/friend:remove', authMiddleware, userController.friends.removeFriend)
module.exports = router