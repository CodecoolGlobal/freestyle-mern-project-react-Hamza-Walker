const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const userSchema = new Schema ({
    UUID: Schema.Types.UUID,
    name: String,
    password: String,
    iconURL: String
})

const User = model ('User', userSchema);

module.exports = User;