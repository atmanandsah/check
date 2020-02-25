var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var adminSchema = mongoose.Schema({
    admin_username:{
        type:String,
        require:true
    },
    admin_email:{
        type:String,
        require:true,
        unique:true
    },
    admin_password:{
        type:String,
        require:true
    },
    admin_phone:{
        type:String,
        require:true,
        maxlength:[10,'Phone number should not exceed than 10']
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
});