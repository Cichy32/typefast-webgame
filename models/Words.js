// create words model
const mongoose = require('mongoose')

const Words = new mongoose.Schema({
    words: {
        type: [String],
    },
    date: {
        type: Date, 
        default: Date.now
    },
    amount: {
        type: Number,
        validate : {
            validator : Number.isInteger,
            message   : '{VALUE} is not an integer value'
          }
    }
})

module.exports = mongoose.model('Words',Words)