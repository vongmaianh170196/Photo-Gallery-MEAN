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
    loved:[
        {
            path:{
                type: String
            }
        }
    ],
    saved:[
        {
            path:{
                type: String
            }
        }
    ]
});
module.exports = User = mongoose.model('user', UserSchema);