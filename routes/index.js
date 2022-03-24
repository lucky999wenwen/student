/*
 * @Descripttion: 
 * @version: 
 * @Author: wanglong
 * @Date: 2021-01-22 14:21:03
 * @LastEditors: wanglong
 * @LastEditTime: 2021-04-29 15:43:07
 */
var express = require('express');
var Student = require("../models/Student");
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    let data = {
        code: 200,
        msg: "Hello World",
    };
    res.send(data);
});

module.exports = router;