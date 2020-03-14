const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const flash = require('connect-flash');
const session = require('express-session');

const app = express();
const colors = require('colors');
const register = require('./routes/register');



app.use(express.json());
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","*");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
    next();
})


mongoose.set('useCreateIndex', true)
mongoose.connect('mongodb+srv://atmanand:9934158052@cluster0-duyby.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true},function(err,db){
    if(err){
        console.log('unable to connect',err);
    }
    else{
        console.log("database connnected".bgGreen);
    }
})
//EJS
app.use(expressLayouts);
app.set('view engine','ejs');

//Express body parser
app.use(express.urlencoded({extended:true}));

// Set view engine as EJS
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');
// Set 'views' directory for any views 
// being rendered res.render()
app.set('views', path.join(__dirname, 'views'));
// Require static assets from public folder
app.use(express.static(path.join(__dirname, 'public')));

// Express session
app.use(
    session({
      secret: 'secret',
      resave: true,
      saveUninitialized: true
    })
  );

//connect flash
app.use(flash());
//global variables for flash
app.use((req,res,next) => {
    res.locals.success_msg = req.flash('success_msg');
    next();
})

//Routes
app.use('/register',register);



//app listen
app.listen(8000, ()=>{
    console.log("app started");
})