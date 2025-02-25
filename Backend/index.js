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
        origin: "https://potato-det.vercel.app",
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

// ===================================Connect to MongoDB=========================================
// mongoose.connect('mongodb://localhost:2717/user')
const MONGO_URI = "mongodb+srv://frankkips:p2xzr8xjAx7Ar5M@cluster0.pjbj5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(MONGO_URI)

// Connection event handlers
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB Atlas');
});

mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

mongoose.connection.on('disconnected', () => {
    console.log('Disconnected from MongoDB');
});

// =================================================================================
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
// ===================================FILE IMAGE UPLOAD=========================================

app.post('/upload/:name',upload.single('image'), async(req,res) => {
    const {name} = req.params
    const imageName = req.file.filename
    const { class: disease, confidence, date } = req.body
    try{

        const newData = {
            class: disease,
            confidence,
            image: imageName,
            date: date
        };


        await UserModel.findOneAndUpdate(
            {name:name} ,
            { $push: { data: newData }},
            { new: true })
        res.json("Image Uploaded")
    }catch(err){
        res.json(err)
    }
})

// =================================PROFILE PART================================================
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

// =====================================GET DATA===============================================
app.get('/getData/:name',(req,res) => {
    const {name} = req.params
    UserModel.findOne({name: name}).select('-_id data')
    .then(user => {
        res.json(user)
    })
    .catch(err => res.json(err))
})

// ============================================================================================
app.get('/' ,(req,res) => {
    if (req.session.user){
        return res.json({valid: true ,username: req.session.user})
    }else{
        return res.json({valid: false})
    }
})


// =====================================LOGIN and REGISTER======================================
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
// Logout endpoint
app.post('/logout', (req, res) => {
    // Clear session or token
    req.session.destroy(err => {
        if (err) {
            console.log(err);
            res.status(500).json("Failed to logout");
        } else {
            res.json({ message: "Logout successful" });
        }
    });
});

app.post('/register', (req, res) => {
    // Check if username already exists
    UserModel.findOne({ name: req.body.name })
        .then(existingUser => {
            if (existingUser) {
                // Username already exists, return error
                res.status(400).json({ error: 'Username already exists' });
            } else {
                // Username is available, create new user
                UserModel.create(req.body)
                    .then(newUser => res.json(newUser))
                    .catch(err => res.status(500).json({ error: 'Failed to create user' }));
            }
        })
        .catch(err => res.status(500).json({ error: 'Database error' }));
});





// app.post('/register',(req,res) => {
//     UserModel.create(req.body)
//     .then(users => res.json(users))
//     .catch(err => res.json(err))
// })

// ================================MOST COMMON CLASS======================
app.get('/mostCommonClass/:name', async (req, res) => {
    const { name } = req.params;
    const mostCommonResult = await UserModel.aggregate([
            { $match: { name } },
            { $unwind: "$data" }, // Unwind the data array
            { $group: { _id: "$data.class", count: { $sum: 1 } } }, // Group by class and count occurrences
            { $sort: { count: -1 } } // Sort in descending order of count
        ])

        const mostCommonClass = mostCommonResult.length > 0 ? mostCommonResult[0]._id : 'No data';
        res.json({ mostCommonClass });
});

app.listen(3001, () => {
    console.log("Server is running")
})