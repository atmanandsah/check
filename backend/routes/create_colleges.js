const express  = require('express');
const router = express.Router();

var {addCollege} = require('../models/colleges_reg');

router.post('/',(req,res) => {
    console.log("college creation requested");
    console.log(req.body);

    addCollege(req.body)
    .then((data) => console.log(data))
    .catch((err) => console.log(err))

    var response_data = {
        ...req.body,
        created:"true"
    }
    res.json(response_data)

});

module.exports = router;