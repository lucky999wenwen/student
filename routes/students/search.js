/*
 * @Descripttion: 
 * @version: 
 * @Author: wanglong
 * @Date: 2021-04-29 16:36:54
 * @LastEditors: wanglong
 * @LastEditTime: 2021-04-30 17:03:10
 * @* : 博虹出品，抄袭必究😄
 */
var express = require('express');
var Student = require("../../models/Student");
var getId = require("../../models/createId");
var getCreateTime = require("../../models/create_time");
var router = express.Router();
router.get('/', function (req, res, next) {
    //可以根据 关键词  班级id  页码条数 创建时间查询
    const classGradeId = req.query.classGradeId
    // classGradeId ? classGradeId = classGradeId : classGradeId = undefined
    let keywords = req.query.keywords
    keywords ? keywords = keywords : keywords = ''
    const pageNums = req.query.pageNums
    const pageIndex = pageNums * (req.query.pageIndex - 1)
    var create = "SELECT * FROM students WHERE class_grade_id='" + classGradeId + "' AND name LIKE '%" + keywords + "%' LIMIT " + pageNums + " OFFSET " + pageIndex + ";"

    let data = {
        code: 200,
        msg: "成功",
    };
    //增
    Student.query(create, function (err, result) {
        //询问访问数据库，也就是去嫩那个数据库
        if (err) {
            //失败就报个错
            throw err;
        }
        data.data = result
        res.send(data);
    });
});

module.exports = router;