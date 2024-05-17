const mongoose=require('mongoose')

const AdminSchema = new mongoose.Schema({
    username:String,
    email:String,
    password:String
})

const Admin =mongoose.model('GroupProject',AdminSchema)
module.exports=Admin