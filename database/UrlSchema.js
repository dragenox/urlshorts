const mongoose = require('mongoose')

// instantiate schema
const URLSchema = new mongoose.Schema({
    urlCode: String,
    longUrl: String,
    shortUrl: String,
    date: {
        type: String,
        default: Date.now
    }
})

// create schema module
module.exports = mongoose.model('Url', URLSchema);