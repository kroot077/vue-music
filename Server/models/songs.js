const mongoose = require('mongoose');
const {Schema} = mongoose;
let schemaName = 'Song'

const schema = new Schema({
    artworkUrl100: {
        type: Image,
        required: true
    },
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

module.exports = mongoose.model(schemaName, schema)