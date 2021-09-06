const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const { createWords: getWords } = require('./controllers/words')
const wordsRoute = require('./routes/words')
const websiteRoute = require('./routes/website')
const auth = require('./routes/auth')
const mongoose = require('mongoose')
require("dotenv").config();

const app = express()
var cors = require('cors')

app.set('view-engine', 'ejs')
app.use(express.static(__dirname + '/public'));


app.use(cors())
app.use(bodyParser.urlencoded({extends: true}))
app.use(bodyParser.json())

try {
    mongoose.connect(
        process.env.MONGODB_URI,
         { useUnifiedTopology: true, useNewUrlParser: true }, 
         () =>
         console.log('db connection state: '+ mongoose.connection.readyState)         );
} catch (error) {
    console.log(error);
}

app.get('/test/:id', (req,res) =>{
    console.log(req.params.id)
})


app.use('/words', wordsRoute)
app.use('/auth', auth)
app.use('/', websiteRoute)



app.listen(3000)
