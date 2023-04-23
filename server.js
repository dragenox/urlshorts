// dotenv import
require('dotenv').config()
// import express package (commonJS)
const express = require('express')

// initiate express app
const app = express()

// connect db
require('./database/database').connect()

// static path
app.use(express.static('public'));

// routes
app.use('/', (req, res) => {
    res.sendFile('index.html', {root: 'public'})
})

// Schemas
const Url = require('./database/TestSchema')

// post
app.post('/', async (req, res, next)=>{
    var inputUrl = req.body.url.trim()
    console.log(inputUrl)
    if (inputUrl){
        var url = await Url.findOne({
            $or: [
                {url: url}
            ]
        })
        console.log(url)
    }
})

// listen for requests
const PORT = process.env.PORT || 5000
app.listen(PORT, () => { console.log('server started at port ' + PORT) })