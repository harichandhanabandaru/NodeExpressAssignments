const express = require('express');
const bodyParser=require('body-parser');
const path=require('path')


const app= express();

const userRoutes=require('./routes/user.js');

app.use(bodyParser.urlencoded({extended:false}));
// to give only read access to files
app.use(express.static(path.join(__dirname,'public')))

app.use(userRoutes);


//  404 error method
app.use((req,res,next)=>{
    res.sendFile(path.join(__dirname,'views','404.html'));
});

app.listen(3000)