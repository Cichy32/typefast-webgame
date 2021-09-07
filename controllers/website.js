exports.renderSite = (req,res) =>{
    res.render('index.ejs')
} 

exports.getText = (req,res) =>{
    res.json({
        super: 'tak'
    })
}