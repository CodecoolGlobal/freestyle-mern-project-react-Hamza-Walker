const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const groupScheme = new Schema ({
    membersId: String, // array of IDs
    ownerId: String,
    createdAt: Date,
    updatedAt: Date
})

const Group = model ('Group', groupScheme);

module.exports = Group;