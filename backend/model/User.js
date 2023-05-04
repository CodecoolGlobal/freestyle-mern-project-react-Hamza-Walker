const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const userSchema = new Schema ({
    name: String,
    password: String,
    iconURL: String,
    createdAt: Date,
    updatedAt: Date
})

const User = model ('User', userSchema);

module.exports = User;