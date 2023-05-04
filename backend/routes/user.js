const express = require('express');
const router = express.Router();
const User = require('../model/User');

router.use(express.json());

router.get('/', (req, res) => {
    User.find({})
    .then(user => {
        res.json(user)
    })
    .catch((err) => {
        console.log(err);
        res.status(400);
    });
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    User.findById(id)
    .then((user) => {
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    })
    .catch((err) => {
        console.log(err);
        res.status(500);
    });
});

router.post('/', (req, res) => {


    const name = req.body.name;
    const password = req.body.password;
    const iconURL = req.body.iconURL;
    const createdAt = Date.now();
    const updatedAt = Date.now();

    const user = new User({
        name,
        password,
        iconURL,
        createdAt,
        updatedAt
    });

    user.save()
    .then(user => res.json(user))
    .catch((err) => {
        console.log(err);
        res.status(400);
    });
});

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const update = req.body;

    User.findByIdAndUpdate(id, update, { new: true})
    .then((user) => {
        if (!user) {
            return res.status(404).json({ message: 'User not found'});
        }
        res.json(user);
    })
    .catch((err) => {
        console.log(err);
        res.status(400);
    });
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    User.findByIdAndRemove(id)
    .then((user) => {
        if (!user) {
            return res.status(404).json({ message: 'User not found'});
        }
        res.json({ message: 'User deleted successfully'})
    })
    .catch((err) => {
        console.log(err);
        res.status(400);
    })
})

module.exports = router