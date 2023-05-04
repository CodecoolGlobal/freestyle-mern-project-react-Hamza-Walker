const express = require('express')
const mongoose = require('mongoose')
const notesRouter = require('./routes/note')
const groupRouter = require('./routes/group')
const userRouter = require('./routes/user')

mongoose.connect("mongodb+srv://shengkaixia1337:5tdpVl4MfjTquSgE@cluster0.teev0da.mongodb.net/test")

const app = express()

app.use(express.json())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3001");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/api/note', notesRouter)
app.use('/api/group', groupRouter)
app.use('/api/user', userRouter)

app.listen(3000, () => console.log('http://localhost:3000'))