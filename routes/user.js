const path=require('path')
const rootDir =require('../util/path');

const express = require('express');
const router=express.Router();

router.use('/users',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','user.html'));

})

router.use('/',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','main.html'));


})



module.exports=router;