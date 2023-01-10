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
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Poem', poemSchema)