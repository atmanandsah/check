const mongoose = require('mongoose');

const AdminSchema =  new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    mobile:{
        type:String,
        require:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
});

const Admin = mongoose.model('Admin',AdminSchema);
module.exports = Admin;