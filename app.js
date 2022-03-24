/*
 * @Descripttion: 
 * @version: 
 * @Author: wanglong
 * @Date: 2021-01-22 14:21:03
 * @LastEditors: wanglong
 * @LastEditTime: 2021-04-30 14:42:04
 */
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var Student = require("./models/Student");
// 引入并使用cors中间件 处理跨域 
var cors = require("cors");


var app = express();
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, "uploads")));

/* 接口引入   start */

app.use('/', require('./routes/index')); //根接口

/* 教师接口 start */
app.use('/teacher/create', require('./routes/teacher/create')); //教师创建
/* 教师接口 end */

/* 年级接口 start */
app.use('/grade/create', require('./routes/grade/create')); //年级创建
/* 年级接口 end */

/* 班级接口 start */
app.use('/class_grade/create', require('./routes/class_grade/create')); //班级创建
/* 班级接口 end */

/* 学生接口 start */
app.use('/students/create', require('./routes/students/create')); //学生创建
app.use('/students/search', require('./routes/students/search')); //学生列表查询
/* 学生接口 end */

/* 接口引入   end */


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});


module.exports = app;