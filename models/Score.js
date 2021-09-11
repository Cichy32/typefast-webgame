// score model
const mongoose = require('mongoose')

const Score = new mongoose.Schema({
    name: {
        type: String,
    },
    score: {
        type: Number, 
    }
})

module.exports = mongoose.model('Score',Score)