const express = require('express');
const router = express.Router();
const Group = require('../model/Group');

router.get('/', (req, res) => {
    Group.find({})
    .then(group => {
        res.json(group)
    })
    .catch((err) => {
        console.log(err);
        res.status(400)
    });
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    Group.findById(id)
    .then((group) => {
        if (!group) {
            return res.status(404).json({ message: 'Group not found' });
        }
        res.json(group);
    })
    .catch((err) => {
        console.log(err);
        res.status(500);
    });
});

router.post('/', (req, res) => {
    const membersId = req.body.membersId;
    const ownerId = req.body.ownerId;
    const createdAt = Date.now();
    const updatedAt = Date.now();

    const group = new Group({
        membersId,
        ownerId,
        createdAt,
        updatedAt
    });

    group.save()
    .then(group => res.json(group))
    .catch((err) => {
        console.log(err);
        res.status(400);
    });
});

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const update = req.body;

    Group.findByIdAndUpdate(id, update, { new: true})
    .then((group) => {
        if (!group) {
            return res.status(404).json({ message: 'Group not found'});
        }
        res.json(group);
    })
    .catch((err) => {
        console.log(err);
        res.status(400);
    });
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    Group.findByIdAndRemove(id)
    .then((group) => {
        if (!group) {
            return res.status(404).json({ message: 'Group not found'});
        }
        res.json({ message: 'Group deleted successfully'})
    })
    .catch((err) => {
        console.log(err);
        res.status(400);
    })
})

module.exports = router