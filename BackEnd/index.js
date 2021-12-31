const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = 5000

mongoose.connect('mongodb+srv://Inshal:Inshal1998@reduxtodoapi.fcdmz.mongodb.net/Todos?retryWrites=true&w=majority',{
    useNewUrlParser:true,
})

mongoose.connection.on('connected' ,()=> {
    console.log('DB Connected ..')
})

mongoose.connection.on('error' ,()=> {
    console.log('DB Not Connected ..')
})


app.get('/' , (req , res) =>{
    res.send('Working')
})

app.listen(PORT , ()=>{console.log(`Running On Port ${PORT}`)})
