const asyncHandler = require('express-async-handler')
const { default: mongoose } = require('mongoose')

const Poem = require('../schemas/poemSchema')
const User = require('../schemas/userSchema')

/* this was getting poems for a specific user
const getPoems = asyncHandler(async(req, res) => {
    const  poems = await Poem.find({ user: req.user.id})
    res.status(200).json(poems)
})
*/

const getPoems = asyncHandler(async(req, res) => {
    const poems = await Poem.find()
    res.status(200).json(poems)
})

const setPoem = asyncHandler(async(req, res) => { //post
    if(!req.body.title || !req.body.content){
        res.status(400)
        throw new Error('Missing necessary fields')
    }
    const user = await User.findById(req.user.id)

    const poem = await Poem.create({
        title: req.body.title,
        content: req.body.content,
        user: req.user.id,
        username: user.name
    })
    res.status(200).json({message: `Set poems`})
})

const addComment = asyncHandler(async(req, res) => {
    const user = await User.findById(req.user.id)
    if(!user){
        res.status(401)
        throw new Error('User not found')
    }

    const updatedPoem = await Poem.findByIdAndUpdate(req.params.id, {$push: 
        {"comments": 
            {content: req.body.comment, 
                user: req.user.id}
        }}, {new: true})
    res.status(200).json(updatedPoem)
})

const updatePoem = asyncHandler(async(req, res) => {
    if(!mongoose.Types.ObjectId.isValid(req.params.id)){
        res.status(400)
        throw new Error('Invalid object id')
    }

    const user = await User.findById(req.user.id)
    if(!user){
        res.status(401)
        throw new Error('User not found')
    }

    //If poems user creator ID doesnt match token id
    if(Poem.findById(req.params.id).user.toString() !== user.id){
        res.status(401)
        throw new Error('User not authorized')
    }
    const updatedPoem = await Poem.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json(updatedPoem)
}) //put

const deletePoem = asyncHandler(async(req, res) => {
    if(!mongoose.Types.ObjectId.isValid(req.params.id)){
        res.status(400)
        throw new Error('Invalid object id')
    }

    const user = await User.findById(req.user.id)
    if(!user){
        res.status(401)
        throw new Error('user not found')
    }
    if(Poem.findById(req.params.id).user.toString() !== user.id){
        res.status(401)
        throw new Error('User not authorized')
    }

    const deletedPoem = await Poem.findByIdAndDelete(req.params.id)

    res.status(200).json(deletedPoem)
})

module.exports = {
    getPoems, setPoem, updatePoem, deletePoem, addComment
}