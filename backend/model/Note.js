const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const noteScheme = new Schema ({
    title: String,
    content: String,
    owner: Schema.Types.UUID,
    permitted: Schema.Types.UUID,
    createdAt: Date,
    updatedAt: Date
})

const Note = model ('Note', noteScheme);

module.exports = Note;