const mongoose = require('mongoose')

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.ATLAS_URI)
        console.log(`Connected to database, host: ${conn.connection.host}`)
    }catch (error){
        console.log(error)
        process.exit(1)
    }
}

module.exports = {connectDB, }