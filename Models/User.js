const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required:true
    },
    password: {
        type: String,
        required:true
    },
    avatar: {
        type: String
    },
    saved: [{
        photo: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'photo'
        }
    }]
});
module.exports = User = mongoose.model('user', UserSchema);