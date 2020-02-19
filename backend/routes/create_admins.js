const express = require('express');
const router = express.Router();

router.post('/',(req,res) => {
    console.log("admin creation requested");
    console.log(req.body);

    addAdmin(req.body)
    .then((data) => console.log(data))
    .cath((err) => console.log(err))

    var response_data ={
        ...req.body,
        created:"true"
    }
    res.json(response_data)

    
});

module.exports = router;