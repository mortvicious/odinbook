#!/usr/bin/env node

const express = require('express')
const mongoose = require('mongoose')
// const config = require('config')
const path = require('path');
const cookieParser = require('cookie-parser')
const authRouter = require('./Routes/auth.routes')
const postRouter = require('./Routes/post.routes')
const userRouter = require('./Routes/user.routes')
const corsMiddleware = require('./middleware/cors.middleware')
const cors = require('cors')

const app = express()

// const bodyParser = require('body-parser');



app.use(cookieParser())
// app.use(corsMiddleware)
app.use(cors({ credentials: true, origin: "http://localhost:3000" }))
app.use(express.json())
// app.use(bodyParser.json());

app.use('/api/auth', authRouter)
app.use('/api/post', postRouter)
app.use('/api/user', userRouter)
app.use(express.static(path.join(__dirname, '../client/build')));

// const start = async () => {
//     try {
//         await mongoose.connect(config.get('dbUrl'), {useNewUrlParser:true, useUnifiedTopology:true})
//         const db = mongoose.connection
//         db.on('error', console.error.bind(console, `Error MongoDB`))
//         app.listen(process.env.PORT, () => {
//             console.log(`Server started on port: ${PORT }`)
//             console.log(mongoose.connection.readyState)
//         })
//     } catch (e) {

//     }
// }


// start()





