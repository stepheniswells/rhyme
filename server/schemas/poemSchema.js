const mongoose = require('mongoose')

const poemSchema = mongoose.Schema({
    title: {
        type: String
    },
    content: {
        type: String
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    username: {
        type: String
    },
    comments: [{
        content: String,
        user: mongoose.Schema.Types.ObjectId,
        date: {type: Date, default: Date.now},
    }]
}, {
    timestamps: true
})

module.exports = mongoose.model('Poem', poemSchema)