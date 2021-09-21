

const mongoose = require('mongoose')

const Avatar = new mongoose.Schema({
    name: {
        type: String,
    },
    img: {
        data: Buffer,
        contentType: String 
    }
})

module.exports = mongoose.model('Avatar',Avatar)