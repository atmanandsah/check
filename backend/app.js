const express = require('express');
const expressLayout = require('express-ejs-layouts');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const flash = require('connect-flash');
const session = require('express-session');

const app = express();
    // Require static assets from public folder
    app.use(express.static(path.join(__dirname, 'public')));
    // Set view engine as EJS
    app.engine('ejs', require('ejs').renderFile);
    app.set('view engine', 'ejs');
    // Set 'views' directory for any views 
    // being rendered res.render()
    app.set('views', path.join(__dirname, ''));
    app.use('/form', express.static(__dirname + '/index.html'));
const colors = require('colors');
// const create_students = require('./routes/create_students');
// const create_admins = require('./routes/create_admins');
// const create_colleges = require('./routes/create_colleges');



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


app.get("/", (req, res)=>{
    res.send (" Welcome to express");
})
app.use('/register',require('./routes/index'));
//mount routers
// app.use('/api/v1/students_reg',create_students);
// app.use('/api/v1/colleges_reg',create_colleges);
// app.use('/api/v1/admin_reg',create_admins);




//app listen
app.listen(5000, ()=>{
    console.log("app started");
})