// import express package (commonJS)
const express = require('express')

// initiate express app
const app = express()

// database config
// const connection = require('./config/database')
// connection.once('open', ()=>{console.log('Database Connected')})
// connection.on('error', ()=>{console.log('Database Connection Error')})

// routes
app.use('/', (req, res) => {
    res.sendFile('index.html', {root: 'public'})
})

// listen for requests
const PORT = process.env.PORT || 5000
app.listen(PORT, () => { console.log('server started at port ' + PORT) })