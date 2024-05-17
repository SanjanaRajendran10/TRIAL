const express=require('express')
const router=express.Router()
const bodyParser=require('body-parser')
const AdminModel=require('../models/Admin-model')


router.use(bodyParser.json())

router.get('/',(req,res)=>{
    res.send('HomePage')
})

router.post('/post',(req,res)=>{
    console.log(req.body)
    const newData=new AdminModel(req.body)

    newData.save()
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
    res.send('Admin post page')
})
module.exports=router               