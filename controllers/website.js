const Text = require('../models/Text')
const Words = require('../models/Words')

// render website
exports.renderSite = (req,res) =>{
    res.render('index.ejs')
} 

// render the game
exports.renderGame = (req, res) =>{
    if (!req.body.name) return res.status(400).send('You have to be logged in')
    res.render('game.ejs',{testObject: req.body.name})    
}

// test response to website
exports.getText = async (req,res) =>{
    const texts = await Text.$find().exec()
    res.status(200).send(texts[0])
}