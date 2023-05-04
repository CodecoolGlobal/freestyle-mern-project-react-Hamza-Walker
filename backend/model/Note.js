const  User = require('./User')
const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const noteScheme = new Schema ({
    title: String,
    content: String,
    owner: { type: User },
    permitted: String,
    createdAt: Date,
    updatedAt: Date
})

const Note = model ('Note', noteScheme);

module.exports = Note;