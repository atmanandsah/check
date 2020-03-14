const mongoose = require('mongoose');

const CollegeSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    code:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    tpo_name:{
        type:String,
        require:true
    },
    tpo_email:{
        type:String,
        require:true
    },
    tpo_password:{
        type:String,
        require:true
    },
    tpo_mobile:{
        type:String,
        require:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
});

const College = mongoose.model('College',CollegeSchema);
module.exports = College;