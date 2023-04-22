// import express package (commonJS)
const express = require('express')

// initiate express app
const app = express()

// database config
const connection = require('./config/database')
connection.once('open', ()=>{console.log('Database Connected')})
connection.on('error', ()=>{console.log('Database Connection Error')})

// routes
// parse in json format
app.use(express.json({extended: false}))
app.use('/', require('./routes/redirect'))
app.use('/api/url', require('./routes/url'))

// listen for requests
const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{console.log('server started at port ' + PORT)})