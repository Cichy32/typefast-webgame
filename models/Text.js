const mongoose = require('mongoose')

const Text = new mongoose.Schema({
    text: {
        type: Array,
    }
})

module.exports = mongoose.model('Text',Text)