const mongoose = require('mongoose')

const connectdb = () =>{
    try {
        mongoose.connect(process.env.DB_url)
        console.log('Connected to database')
    } catch (error) {
        console.error(error.message)
        process.exit(1)
    }
}

module.exports = connectdb()

