const mongoose = require('mongoose');

const PhotoSchema = new mongoose.Schema({
    caption: {
        type: String
    },
    path: {
        type: String
    }
});
module.exports = Photo = mongoose.model('photos', PhotoSchema);