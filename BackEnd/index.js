const express = require('express')
const app = express()
const mongoose = require('mongoose')
const APP_PORT = 5000
const bcrypt = require('bcrypt')
const User = require('./models/users')
const Todo = require('./models/todo')
const jwt = require('jsonwebtoken')
const JWT_SECRET = 'SomeRandomTxt'
mongoose.connect('mongodb+srv://Inshal:Inshal1998@reduxtodoapi.fcdmz.mongodb.net/Todos?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

mongoose.connection.on('connected' ,()=> {
    console.log('DB Connected ..')
})

mongoose.connection.on('error' ,()=> {
    console.log('DB Not Connected ..')
})
app.use(express.json())

const isAuthenticated = (req,res,next)=>{
    const {authorization} = req.headers
    console.log(authorization);
    if(!authorization){
        return res.status(401).json({error:'You Must be Logged In a ...'})
    }
    try{
        const {userId} = jwt.verify(authorization , JWT_SECRET)
        req.user = userId;
        next() 
    }catch(err){
        return res.status(401).json({error:'You Must be Logged In err...'})
    }
}

app.post('/signUp' , async(req,res)=>{
    const {email , password} = req.body
    // console.log(req.body);
    try {
        if(!email || !password){
            console.log('All Fields');
            return res.status(422).json({error:'Please Add All Fields !!'})
        }
        const user = await User.findOne({email})
        if(user){
            return res.status(422).json({error:'User Already Registered !!'})
        }
        const hashedPassword = await bcrypt.hash(password ,12)
        await new User({
            email,
            password:hashedPassword
        }).save()
        res.status(200).json({message:'SignUp Successfully'})
    } catch (error) {
        console.log('SomeThing Went Wrong',error);
    }
})

app.post('/signIn' , async(req,res)=>{
    const {email , password} = req.body
    // console.log(req.body);
    try {
        if(!email || !password){
            console.log('All Fields');
            return res.status(422).json({error:'Please Add All Fields !!'})
        }
        const user = await User.findOne({email})
        if(!user){
            return res.status(404).json({error:'User Not Registered !!'})
        }
        const found = await bcrypt.compare(password , user.password)
        if(found){
            const token = jwt.sign({
                userId:user._id,
            },JWT_SECRET)            
            res.status(201).json({token})
        }else{
            return res.status(401).json({error:'Email Or Password Invalid !!'})
        }
    } catch (error) {
        console.log('SomeThing Went Wrong',error);
    }
}
)

app.post('/createtodo' , isAuthenticated , async(req,res)=>{
    const data = await new Todo({
        todo:req.body.todo,
        todoBy:req.user

    }).save()  
    res.status(201).json({message:data})
})

app.get('/getTodo', isAuthenticated , async(req,res)=>{
    const data = await Todo.find({
        todoBy:req.user
    })
    res.status(200).json({message:data})
})

app.delete('/delete/:id',isAuthenticated ,async(req,res)=>{
    const removed = await Todo.findOneAndDelete({
        _id:req.params.id
    })
    res.status(200).json({message:"Deleted Success...",removed})



})

app.get('/test' ,isAuthenticated, (req , res) =>{
    res.json({
        message:req.user
    })
    res.status(201).json({message:data})
})

app.listen(APP_PORT , ()=>{console.log(`Running On Port ${APP_PORT}`)})
