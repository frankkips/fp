const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./Models/User')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://localhost:2717/user')

app.post('/login',(req,res) => {
    const {name, password} = req.body
    UserModel.findOne({name: name})
    .then(user => {
        if (user){
            if (user.password === password){
                res.json("Success")
            }else{
                res.json("The password is incorrect")
            }
        }else{
            res.json("No record exist")
        }
    })
})

app.post('/register',(req,res) => {
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("Server is running")
})