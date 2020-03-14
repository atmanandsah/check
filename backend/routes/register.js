const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const Student = require('../models/Student');
const Admin = require('../models/Admin');

//welcome page
router.get('/', (req,res) => res.render('register_welcome'));

router.get('/admin',(req,res) => res.render('admin'));
router.post('/admin',(req,res) =>{
    const {name,email,password,password2,mobile} = req.body;
    let errors=[];
    if(!email || !password || !password2 || !mobile){
        errors.push({msg:'Please enter all the fields'});
    }
    if(password != password2){
        errors.push({msg:'Password do not match'});
    }
    if(password.length<6){
        errors.push({msg:'password must be greater than 6 character'});
    }
    if(mobile.length<10){
        errors.push({msg:'Please enter the valid mobile no'});
    }
    if(errors.length>0){
        res.render('admin',{
            name,
            email,
            password,
            password2,
            mobile
        });
    }
    else{
        Admin.findOne({email:email}).then(admin => {
            if(admin){
                errors.push({msg:'Admin with this email allready exists'});
                res.render('admin',{
                    name,
                    email,
                    password,
                    password2,
                    mobile
                });
            }
            else{
                const newAdmin = new Admin({
                    name,
                    email,
                    password,
                    mobile
                });
                bcrypt.genSalt(10,(err,salt)=>{
                    bcrypt.hash(newAdmin.password,salt,(err,hash)=>{
                        if(err) throw err;
                        newAdmin.password = hash;
                        newAdmin
                            .save()
                            .then(admin =>{
                                req.flash('success_msg','Admin are now Registered and now you can login');
                                res.redirect('/register/admin');
                            })
                            .catch(err => console.log(err));
                    });
                });
            }
        });
    }
});

router.get('/student',(req,res) => res.render('student'));
router.post('/student', (req,res) =>{
    const {email,password,password2,name,roll,mobile,branch,college} = req.body;
    let errors = [];
    if(!email || !password || !password2 || !name || !roll || !mobile || !branch || !college){
        errors.push({msg: 'Please enter all the fields'});
    }
    if(password != password2){
        errors.push({msg : 'password do not match'});
    }
    if(password.length<6){
        errors.push({msg:'password must be greater than 6 character'});
    }
    if(errors.length>0){
        res.render('student',{
            errors,
            email,
            password,
            password2,
            name,
            roll,
            mobile,
            branch,
            college
        });
    }
    else{
        Student.findOne({email: email}).then(student =>{
            if(student){
                errors.push({msg: 'Student with this email allready exists'});
                res.render('student',{
                    errors,
                    email,
                    password,
                    password2,
                    name,
                    roll,
                    mobile,
                    branch,
                    college

                });
            }
            else{
                const newStudent = new Student({
                    email,
                    password,
                    name,
                    roll,
                    mobile,
                    branch,
                    college
                });

                bcrypt.genSalt(10, (err,salt) => {
                    bcrypt.hash(newStudent.password,salt, (err,hash) =>{
                        if(err) throw err;
                        newStudent.password = hash;
                        newStudent.save()
                    .then( student => {
                        req.flash('success_msg','You are successfully registerd and you can login ');
                        res.redirect('/register/student');
                    })
                    .catch(err => console.log(err));
                    })
                })
                
            }
        });

    }

    
});

router.get('/college',(req,res) => res.render('college'));

module.exports = router;