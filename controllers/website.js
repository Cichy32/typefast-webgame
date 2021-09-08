// render website
exports.renderSite = (req,res) =>{
    res.render('index.ejs')
} 

// test response to website
exports.getText = (req,res) =>{
    res.json({
        super: 'tak'
    })
}