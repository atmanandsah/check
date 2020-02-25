const express = require('express');
const router = express.Router();

var {addStudent} = require('../models/students');

router.post('/',(req,res) => {
    console.log("student creation requested");
    console.log(req.body);

    addStudent(req.body)
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
    
    var response_data = {
        ...req.body,
        created:"true"
    }
    res.json(response_data)
});

module.exports = router;