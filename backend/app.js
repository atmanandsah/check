var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();
var colors = require('colors');
const create_students = require('./routes/create_students');
const create_admins = require('./routes/create_admins');
const create_colleges = require('./routes/create_colleges');


app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.use(express.json());
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","*");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
    next();
})



mongoose.connect('mongodb+srv://atmanand:9934158052@cluster0-duyby.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true},function(err,db){
    if(err){
        console.log('unable to connect',err);
    }
    else{
        console.log("database connnected".yellow);
    }
})
//.then(()=>console.log("database connected"));


app.get("/", (req, res)=>{
    res.send (" Welcome to express");
})
//mount routers
app.use('/api/v1/students_reg',create_students);
app.use('/api/v1/colleges_reg',create_colleges);
app.use('/api/v1/admin_reg',create_admins);




//app listen
app.listen(5000, ()=>{
    console.log("app started");
})