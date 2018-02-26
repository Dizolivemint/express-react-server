const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    googleId: String
});

var User = mongoose.model('User', UserSchema);