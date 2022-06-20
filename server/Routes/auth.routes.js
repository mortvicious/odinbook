const Router = require('express')
const User = require('../models/User')
const config = require('config')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {check, validationResult} = require('express-validator')
const authMiddleware = require('../middleware/auth.middleware')


const router = new Router()

router.post('/registration',[
    check('email', 'Invalid email').isEmail(), 
    check('password', 'Password is incorrect').isLength({min: 3, max: 20}),
    check('login', 'Login is incorrect').isLength({min: 3, max: 20})
    // check('link', 'Link is incorrect').isLength({min:3, max: 20})
], async (req, res) => {

    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({message: 'Incorrect request', errors})
        }
        const {email, login, password, link} = req.body
        const candidateEmail = await User.findOne({email})
        if (candidateEmail) {
            return res.status(400).json({message: `User with email ${email} already exists`})
        }
        const candidateLink = await User.findOne({link})
        if (candidateLink) {
            return res.status(400).json({message: `User with link ${link} already exists`})
        }
        const hashPassword = await bcrypt.hash(password, 15)
        const user = new User({email, login, password: hashPassword, link})
        await user.save()
        return res.json({message: 'User was created'})

    } catch(e) {
        res.send({message: 'Server error'})
    }
})

router.post('/login', async (req, res) => {

    try {
        const {email, password} = req.body
        const user = await User.findOne({email})
        if (!user) {
            return res.status(400).json({message: 'User not found'})
        }
        const isPassValid = bcrypt.compareSync(password, user.password)
        if (!isPassValid) {
            return res.status(400).json({message: 'Wrong password'})
        }
        const token = jwt.sign({id: user.id}, config.get('secretKey'), {expiresIn: '1h'})
        return res.json({
            token,
            user: {
                id: user.id,
                email: user.email,
                login: user.login 
            }
        })

    } catch(e) {
        res.send({message: 'Server error'})
    }
})


router.get('/auth', authMiddleware, 
    
    async (req, res) => {

        try {

            const user = await User.findOne({_id: req.user.id})

            const token = jwt.sign({id: user.id}, config.get('secretKey'), {expiresIn: '1h'})

            return res.json({
                token,
                user: {
                    id: user.id,
                    email: user.email,
                    login: user.login 
                }
            })

        } catch(e) {

            console.log(e)
            console.log('wtf')

            res.send({message: 'Server error'})

        }
})


module.exports = router