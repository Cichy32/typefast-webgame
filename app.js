// Import modules and libraries
const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const { createWords: getWords } = require('./controllers/words')
const wordsRoute = require('./routes/words')
const websiteRoute = require('./routes/website')
const auth = require('./routes/auth')
const mongoose = require('mongoose')
var cors = require('cors')
require("dotenv").config();

// app configuration
const app = express()

app.set('view-engine', 'ejs')
app.use(express.static(__dirname + '/public'));
app.use(cors())
app.use(bodyParser.urlencoded({extends: true}))
app.use(bodyParser.json())

// connect database
try {
    mongoose.connect(
        process.env.MONGODB_URI,
         { useUnifiedTopology: true, useNewUrlParser: true }, 
         () =>
         console.log('db connection state: '+ mongoose.connection.readyState)         );
} catch (error) {
    console.log(error);
}

// Test request
app.get('/test/:id', (req,res) =>{
    console.log(req.params.id)
})

// requests
app.use('/words', wordsRoute)
app.use('/auth', auth)
app.use('/', websiteRoute)


// establish port
app.listen(3000)
