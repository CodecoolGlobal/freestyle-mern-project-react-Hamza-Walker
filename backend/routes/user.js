const express = require('express');
const router = express.Router();
const User = require('../model/User');
const bcrypt = require("bcrypt");

router.use(express.json());

// Assuming you have the necessary dependencies and server setup in your backend

router.post("/login", async (req, res) => {
    const { username, password } = req.body;

    try {
        // Find the user with the given username in the MongoDB collection
        const user = await User.findOne({ username });
    
        if (!user) {
          // User not found
          return res.status(401).json({ error: "Invalid username or password" });
        }
    
        // Compare the provided password with the hashed password stored in the database
        const passwordMatch = await bcrypt.compare(password, user.password);
    
        if (!passwordMatch) {
          // Passwords do not match
          return res.status(401).json({ error: "Invalid username or password" });
        }
    
        // Passwords match, user authenticated successfully
        res.json({ user });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
      }
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
    const { username, password, email } = req.body;

    const createdAt = Date.now();
    const updatedAt = Date.now();

    const hashedPassword = bcrypt.hashSync(password, 1);

    const user = new User({
        username,
        password: hashedPassword,
        email,
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
