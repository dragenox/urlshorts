// dotenv import
require('dotenv').config()
// import express package (commonJS)
const express = require('express')

// initiate express app
const app = express()

// connect db
require('./database/connect').connect()

// routes
app.use('/', (req, res) => {
    res.sendFile('index.html', {root: 'public'})
})

// listen for requests
const PORT = process.env.PORT || 5000
app.listen(PORT, () => { console.log('server started at port ' + PORT) })