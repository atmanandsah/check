var mongoose = require('mongoose');
var schema  =mongoose.Schema;

var collegeSchema = mongoose.Schema({
    college_name:{
        type:String,
        require:true
    },
    college_code:{
        type:String,
        require:true
    },
    college_address:{
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
    tpo_phone:{
        type:String,
        require:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
});

var collegeModel = module.exports = mongoose.model('college', collegeSchema,"colleges");
module.exports.addCollege = (data) =>{
    var college = new collegeModel(data);
    return college.save();
}