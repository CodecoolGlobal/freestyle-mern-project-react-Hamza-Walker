const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const noteScheme = new Schema ({
    title: String,
    content: String,
    owner: String, // UUID
    permitted: Boolean,
    createdAt: Date,
    lastupdatedAt: Date
})

const Note = model ('Note', noteScheme);

module.exports = Note;