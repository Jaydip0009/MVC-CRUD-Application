const mongoose = require('mongoose')

const dbconnect = async () => {
    await mongoose.connect("mongodb://localhost:27017/CRUD")
    console.log("connected to mongodb");    
}

module.exports = dbconnect