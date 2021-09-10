// render website
exports.renderSite = (req,res) =>{
    res.render('index.ejs')
} 

// test response to website
exports.getText = (req,res) =>{
    res.json({
        "text": ["This is the first text", "This is the second text", "This is the third text"]
    })
}