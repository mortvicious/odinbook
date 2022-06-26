const Router = require('express')
const authMiddleware = require('../middleware/auth.middleware')
const userController = require('../controllers/userController')

const router = new Router()

// router.post('/add', authMiddleware, postController.addPost)

// router.get('/feed/get/', authMiddleware, postController.getPosts)

router.post('/get', authMiddleware, userController.getUserById)

router.post('/friend-requests/send', authMiddleware, userController.friendRequest.send)




// router.post('/friend-requests/get', authMiddleware, userController.getFriendsRequestList)

router.get('/friends/requests', authMiddleware, userController.friendRequest.getFriendsRequestList) //get friend-requests list
router.get('/friends', authMiddleware, userController.friends.getFriendsList) //get friends list
router.get('/friend', authMiddleware, userController.friends.getFriendInfo) //get friend url



router.post('/friend-requests/get/user-info', authMiddleware, userController.getUserById)
router.patch('/friend-requests/accept', authMiddleware, userController.friendRequest.accept)
router.patch('/friend/remove', authMiddleware, userController.friends.removeFriend)
router.patch('/friend-requests/decline', authMiddleware, userController.friendRequest.decline)



module.exports = router