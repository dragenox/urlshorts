// dotenv import
require('dotenv').config()
// import express package (commonJS)
const express = require('express')

// initiate express app
const app = express()

// connect db
require('./database/connect').connect()

// static path
app.use(express.static('public'));

// routes
app.use('/', (req, res) => {
    res.sendFile('index.html', {root: 'public'})
})

// post
app.post('/shorten',(req, res)=>{
    console.log(req.body.inputUrl)
    alert(req.body.inputUrl)
})

// listen for requests
const PORT = process.env.PORT || 5000
app.listen(PORT, () => { console.log('server started at port ' + PORT) })