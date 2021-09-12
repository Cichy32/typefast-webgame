const Text = require('../models/Text')
const Words = require('../models/Words')

// render website
exports.renderSite = (req,res) =>{
    res.render('index.ejs')
} 

// test response to website
exports.getText = async (req,res) =>{
    const texts = await Text.find().exec()
    res.send(texts[0])
}