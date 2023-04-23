const mongoose = require('mongoose')

const URLSchema = new mongoose.Schema({
    url: { type: String, required: true, trim: true }
})

var Url = mongoose.model('Url', URLSchema)
module.exports = Url