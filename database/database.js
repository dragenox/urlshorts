// dotenv import
require('dotenv').config()
// import mongoose package (commonJS)
const mongoose = require('mongoose')
// mongoose.set('useNewUrlParser', true)
// mongoose.set('useUnifiedTopology', true)

// export connect function
exports.connect = () => {
    // connect to database
    mongoose.connect(process.env.MONGODB_URL)
        .then(() => {
            console.log('Database Connected')
        })
        .catch((err) => {
            console.log('Database Connection Failed!')
            console.error(err)
            process.exit(1)
        })
}