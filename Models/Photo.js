const mongoose = require('mongoose');

const PhotoSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    by:{
        type: String
    },
    title:{
        type:String,
        // required: true
    },
    caption: {
        type: String
    },
    path: {
        type: String,
        required: true
    },
    lovedBy:[   
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'user'
            }
        }
    ],
    savedBy:[{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user'
        }
    }]
});
module.exports = Photo = mongoose.model('photos', PhotoSchema);