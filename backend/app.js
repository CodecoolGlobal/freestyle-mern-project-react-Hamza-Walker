const express = require('express')
const mongoose = require('mongoose')
const cors = require ('cors')
const notesRouter = require('./routes/note')
const groupRouter = require('./routes/group')
const userRouter = require('./routes/user')

mongoose.connect("mongodb+srv://shengkaixia1337:5tdpVl4MfjTquSgE@cluster0.teev0da.mongodb.net/test")

const app = express()

app.use(express.json())
app.use(cors())


app.use('/api/note', notesRouter)
app.use('/api/group', groupRouter)
app.use('/api/user', userRouter)

app.listen(3000, () => console.log('http://localhost:3000'))