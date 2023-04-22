// dotenv import
require('dotenv').config()
// import mongoose package (commonJS)
const mongoose = require('mongoose')

// declare database string
const MONGODB_URL = process.env.MONGODB_URL

// connect to database
mongoose.connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const connection = mongoose.connection

// export connection object
module.exports = connection