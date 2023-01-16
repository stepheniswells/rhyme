const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../schemas/userSchema')

const registerUser = asyncHandler(async(req, res) => {
    const {name, email, password } = req.body
    if(!name || !email ||!password){
        res.status(400)
        throw new Error('Missing information')
    }

    if(await User.findOne({email})){
        res.status(400)
        throw new Error('User already exists')
    }

    const salt = await bcrypt.genSalt()
    const hashedPass = await bcrypt.hash(password, salt)

    const user = await User.create({
        name, email, password: hashedPass
    })

    if(user){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
        })
    }else{
        res.status(400)
        throw new Error('error creating user')
    }
})


//Authentication: POST /API/USERS/LOGIN
const loginUser = asyncHandler(async(req, res) => {
    const {email, password} = req.body
    const user = await User.findOne({email})

    if(!user){
        res.status(400)
        throw new Error('couldnt find user with that email')
    }else{
        if(await bcrypt.compare(password, user.password)){
            res.status(200).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                token: generateToken(user._id)
            })
        }else{
            res.status(400)
            throw new Error('Invalid password')
        }
    }
})

const getUserData = asyncHandler(async(req, res) => {
    const {_id, name, email} = await User.findById(req.user.id)
    res.status(200).json({
        id: _id,
        name, 
        email
    })
})


//JWT
const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, { 
        expiresIn: '30d'
    })
}


module.exports = {
    registerUser, loginUser, getUserData
}