// dotenv import
require('dotenv').config()
// import mongoose package (commonJS)
const mongoose = require('mongoose')

// declare database string
const MONGODB_URL = process.env.MONGODB_URL

// export connect function
exports.connect = () => {
    // connect to database
    mongoose.connect(MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => {
            console.log('Database Connected')
        })
        .catch((error) => {
            console.log('Database Connection Failed!')
            console.error(error)
            process.exit(1)
        })
}