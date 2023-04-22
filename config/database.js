// import mongoose package (commonJS)
const mongoose = require('mongoose')

// declare database string
const url = 'mongodb'

// connect to database
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const connection = mongoose.connection

// export connection object
module.exports = connection