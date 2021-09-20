// Import modules and libraries
const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const { createWords: getWords } = require('./controllers/words')
const wordsRoute = require('./routes/words')
const websiteRoute = require('./routes/website')
const auth = require('./routes/auth')
const score = require('./routes/score')
const Text = require('./models/Text')
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

// test
// connect database
try {
    console.log(process.env.MONGODB_URI)
    mongoose.connect(
        dbconn,
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

// Save text to the database
app.post('/text/update', (req,res) =>{
    try {
        
        const text = new Text(req.body)
        console.log(text)
        const savedText = text.save()
        res.json(savedText)
    } catch (error) {
        res.send(error)
    }
})

app.use('/words', wordsRoute)
app.use('/auth', auth)
app.use('/', websiteRoute)
app.use('/score', score)

const port = process.env.PORT || 3000
// establish port
app.listen(port)
