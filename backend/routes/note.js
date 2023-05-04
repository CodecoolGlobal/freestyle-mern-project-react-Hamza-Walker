const express = require('express');
const router = express.Router();
const Note = require('../model/Note');

// Get every note by owner, if id is passed only specific note

router.get('/', (req, res) => {
    console.log(req.body)
    const email = req.body.owner
    const id = req.body.id
    if (id) {
        Note.findById(id)
        .then(note => {
            res.json(note)
        })
        .catch((err) => {
            console.log(err)
            res.status(400).json({ message: 'Note not found'})
        })
    } else {
        Note.find({ owner: email})
        .then(note => {
            res.json(note)
        })
        .catch((err) => {
            console.log(err)
            res.status(400).json({ message: 'Note not found'})
        })
    }
})

// Create note

router.post('/', (req, res) => {
    
    const title = req.body.title;
    const content = req.body.content;
    const owner = req.body.owner;
    const permitted = req.body.permitted;
    const createdAt = Date.now();
    const updatedAt = Date.now();

    const note = new Note({
    title,
    content,
    owner,
    permitted,
    createdAt,
    updatedAt
    });

    note.save()
    .then(note => res.json(note))
    .catch((err) => {
        console.log(err);
        res.status(400);
    });
});

// find by ID and Update

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const update = req.body;

    Note.findByIdAndUpdate(id, update, { new: true})
    .then((note) => {
        if (!note) {
            return res.status(404).json({ message: 'Note not found'});
        }
        res.json(note);
    })
    .catch((err) => {
        console.log(err);
        res.status(400);
    });
});

// find Note by id and delete

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    Note.findByIdAndRemove(id)
    .then((note) => {
        if (!note) {
            return res.status(404).json({ message: 'Note not found'});
        }
        res.json({ message: 'Note deleted successfully'})
    })
    .catch((err) => {
        console.log(err);
        res.status(400);
    })
})

module.exports = router