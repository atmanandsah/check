var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var studentSchema = mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    roll:{
        type: String,
        require: true
    },
    mobile:{
        type: String,
        require: true,
        maxlength:[10,'Phone number should not exceed than 10']
    },
    email:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require : true 
    },
    branch:{
        type: String,
        require: true
    },
    college:{
        type: String,
        require: true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
});


var studentModel = module.exports = mongoose.model('student',studentSchema,"students");

//add entery to database
module.exports.addStudent = function(data){
    //adminModel.create(data,callback);
    var student = new studentModel(data);
    return student.save()
}
