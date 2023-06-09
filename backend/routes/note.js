const express = require('express');
const router = express.Router();
const Note = require('../model/Note');

//Get all Notes

// Reqbody wird weitergepassed und find note based on email & id e.g. { email, id}

// router.get('/test/', (req, res) => {
//     console.log(req.body)
//     const email = req.body.owner
//     const id = req.body.id
//     if (id) {
//         Note.findById(id)
//         .then(note => {
//             res.json(note)
//         })
//     } else {
//         Note.find({ owner: email})
//         .then(note => {
//             res.json(note)
//         })
//     }
// })

// router.get('/', (req, res) => {
//     Note.find({})
//     .then(note => {
//         res.json(note);
//     })
//     .catch((err) => {
//         console.log(err);
//         res.status(500).json({ success: false });
//     });
// });

// //Get notes by id

// router.get('/:id', (req, res) => {
//     const id = req.params.id;
//     Note.findById(id)
//     .then((note) => {
//         if (!note) {
//             return res.status(404).json({ message: 'Note not found' });
//         }
//         res.json(note);
//     })
//     .catch((err) => {
//         console.log(err);
//         res.status(500);
//     });
// });

router.get('/', (req, res) => {
    const email = req.query.owner;
    const id = req.query.id;
    if (id) {
        Note.findById(id)
        .then(note => {
            res.json(note);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'Error finding note' });
        });
    } else if (email) {
        Note.find({ owner: email })
        .then(notes => {
            res.json(notes);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'Error finding notes' });
        });
    } else {
        res.status(400).json({ message: 'Missing parameters' });
    }
});






// Create note

router.post('/', (req, res) => {
    const title = req.body.title;
    const content = req.body.content;
    const owner = req.body.owner;
    const permitted = req.body.permitted;
    const createdAt = new Date().toISOString();
    const updatedAt = new Date().toISOString();
    console.log(req.body)

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
            res.status(500).json({ success: false, message: 'Error saving note' });
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