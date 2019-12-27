const mongoose = require('mongoose');

const PhotoSchema = new mongoose.Schema({
    caption: {
        type: String
    },
    name: {
        type: String
    }
});
module.exports = Photo = mongoose.model('photos', PhotoSchema);