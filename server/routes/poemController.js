const asyncHandler = require('express-async-handler')

const getPoems = asyncHandler(async(req, res) => {
    res.status(200).json({message: 'Get Poems'})
})

const setPoem = asyncHandler(async(req, res) => {
    console.log(req.body.text)
    if(!req.body.text){
        res.status(400)
        throw new Error('No text field')
    }
    res.status(200).json({message: 'Set poems'})
})


const updatePoem = asyncHandler(async(req, res) => {
    res.status(200).json({message: 'Update poem ${req.params.id}' })
})

const deletePoem = asyncHandler(async(req, res) => {
    res.status(200).json({message: 'Delete poem ${req.params.id}'})
})

module.exports = {
    getPoems, setPoem, updatePoem, deletePoem
}