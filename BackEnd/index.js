const express = require('express')
const app = express()
const mongoose = require('mongoose')
const APP_PORT = 5000
const bcrypt = require('bcrypt')
const User = require('./models/users')
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
        res.status(200).json({message:'Working Successfully'})
    } catch (error) {
        console.log('SomeThing Went Wrong',error);
    }
})

app.get('/' , (req , res) =>{
    res.send('Working')
})

app.listen(APP_PORT , ()=>{console.log(`Running On Port ${APP_PORT}`)})
