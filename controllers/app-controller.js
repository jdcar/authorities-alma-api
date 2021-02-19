var express = require('express')
var router = express.Router();
// var jobs = require('../models/jobs')

console.log("hello world")


router.get("/", function (req, res) {
    

    var test = { data: "data"}
    res.render('index', {test})
})

module.exports = router;