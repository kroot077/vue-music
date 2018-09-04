const mongoose = require('mongoose');
const {Schema} = mongoose;

const schema = new Schema({
    trackName: {
        type: String,
        required: true
    },
    artistName: {
        type: String,
        required: true
    },
    collectionName: {
        type: String,
        required: true
    }
})