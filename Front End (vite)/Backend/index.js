const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./Models/User')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

const app = express()
app.use(express.json())
app.use(cors(
    {
        origin: "http://localhost:5173",
        methods: ["GET","POST"],
        credentials: true
    }
))
app.use(cookieParser())
app.use(bodyParser.json())
app.use(session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        maxAge: 1000 * 60 * 60 * 24
    }
}))


mongoose.connect('mongodb://localhost:2717/user')
// ================================================================================
const multer  = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../potato-leaf/public/images/')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now()
        cb(null, uniqueSuffix + file.originalname)
    }
})

const upload = multer({ storage: storage })

app.post('/update-dp/:id',upload.single('image'), async(req,res) => {
    const { id } = req.params
    const imageName = req.file.filename
    try{
        await UserModel.findByIdAndUpdate(id,{image: imageName})
        res.json("Image Uploaded")
    }catch(err){
        res.json(err)
    }
})

app.post('/updateProfile', async(req,res) => {
    const {id,name,email,location, password} = req.body
    try{
        await UserModel.updateOne({_id: id},{
            $set: {
                name: name,
                email: email,
                location: location,
                password: password
            }
        })
        return res.json("Updated")
    }catch(err){
        res.json(err)
    }
})

app.get('/getProfile',(req,res) => {
    UserModel.find()
    .then(user => {
        res.json(user)
    })
    .catch(err => res.json(err))
})


app.get('/' ,(req,res) => {
    if (req.session.user){
        return res.json({valid: true ,username: req.session.user})
    }else{
        return res.json({valid: false})
    }
})



app.post('/login',(req,res) => {
    const {name, password} = req.body
    UserModel.findOne({name: name})
    .then(user => {
        if (user){
            if (user.password === password){
                req.session.user = user.name
                console.log(req.session.user)
                res.json({Login: true ,username: req.session.user})
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