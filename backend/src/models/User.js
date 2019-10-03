const mongoose = require('mongoose')

// Creating Schema to User
const UserSchema = new mongoose.Schema({
    email: String,

});

module.exports = mongoose.model('User', UserSchema);