import User from './User'

const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const groupScheme = new Schema ({
    members: {
        type: User,
        default: null
    },
    owner: Schema.Types.UUID
})

const Group = model ('Group', groupScheme);

module.exports = Group;