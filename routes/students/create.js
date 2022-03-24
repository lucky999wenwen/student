/*
 * @Descripttion: 
 * @version: 
 * @Author: wanglong
 * @Date: 2021-04-29 16:36:54
 * @LastEditors: wanglong
 * @LastEditTime: 2021-04-30 14:10:02
 * @* : 博虹出品，抄袭必究😄
 */

var express = require('express');
var Student = require("../../models/Student");
var getId = require("../../models/createId");
var getCreateTime = require("../../models/create_time");
var router = express.Router();
/* GET home page. */
router.post('/', function (req, res, next) {
    const name = req.body.name
    const classGradeId = req.body.classGradeId
    const id = getId(16)
    const createTime = getCreateTime()
    var create = `INSERT INTO students(id,name,class_grade_id,create_time) VALUES('${id}','${name}','${classGradeId}','${createTime}')`;
    let data = {
        code: 200,
        msg: "新增成功",
    };
    if (!name.trim() || !classGradeId) {
        data.code = 201
        data.msg = '请检查班级选择或者学生姓名是否为空!'
        res.send(data);
        return;
    }
    //增
    Student.query(create, function (err, result) {
        //询问访问数据库，也就是去嫩那个数据库
        if (err) {
            //失败就报个错
            throw err;
        }
        res.send(data);
    });
});

module.exports = router;