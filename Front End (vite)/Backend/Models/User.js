const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name:String,
    email:String,
    location:String,
    password:String,
    image:String,
    data:[{
        class: String,
        confidence: String,
        image: String,
        date: String
    }]
    
})

const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel