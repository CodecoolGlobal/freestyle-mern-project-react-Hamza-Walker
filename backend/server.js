const express = require('express')
const mongoose = require('mongoose')
let User = require('./model/User')
let Group = require('./model/Group')
let Note = require('./model/Note')

mongoose.connect("mongodb+srv://shengkaixia1337:5tdpVl4MfjTquSgE@cluster0.teev0da.mongodb.net/test")

const app = express()

app.use(express.json())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3001");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req, res) => {
    res.send('Hello')
})

app.post('/api/note', (req, res) => {

    const title = req.body.title
    const content = req.body.content
    const owner = req.body.owner
    const permitted = req.body.permitted
    const createdAt = Date.now()
    const updatedAt = Date.now()

    const note = new Note({
    title,
    content,
    owner,
    permitted,
    createdAt,
    updatedAt
    });
    Note.save()
    .then(note => res.json(note))
    .catch(err => res.status(400).json({ success: false }));
})

app.listen(3000, () => console.log('http://localhost:3000'))