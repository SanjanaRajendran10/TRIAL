const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')
const admin=require('./routes/AdminRoutes')
const app=express()

app.use(cors())

mongoose.connect('mongodb://127.0.0.1:27017/GroupProject')

mongoose.connection.on('connected',()=>{
    console.log('MongoDb connected successfully')
})

app.get('/',(req,res)=>{
    res.send('backend server')
})


app.use('/admin', admin)

app.listen(3001,()=>{
console.log("server running on port 3001");
})