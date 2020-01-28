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
    lovedBy:[{
        username:{
            type: String
        }
    }],
    savedBy:[{
        username:{
            type: String
        }
    }]
});
module.exports = Photo = mongoose.model('photos', PhotoSchema);