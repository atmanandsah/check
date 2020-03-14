const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    email:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true
    },
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
        require: true
    },
    branch:{
        type: String,
        require: true
    },
    college:{
        type: String,
        require: true
    }
});

const Student = mongoose.model('Student',StudentSchema);

module.exports = Student;