/*
 * @Descripttion: 
 * @version: 
 * @Author: wanglong
 * @Date: 2021-04-29 16:52:51
 * @LastEditors: wanglong
 * @LastEditTime: 2021-04-30 09:38:30
 * @* : 博虹出品，抄袭必究😄
 */
function getCreateTime() {
    var date = new Date(); //实例一个时间对象；
    var year = date.getFullYear(); //获取系统的年；
    var month = date.getMonth() + 1; //获取系统月份，由于月份是从0开始计算，所以要加1
    month < 10 ? month = '0' + month : month
    var day = date.getDate();
    day < 10 ? day = '0' + day : day
    var hour = date.getHours(); //获取系统时间
    hour < 10 ? hour = '0' + hour : hour
    var minute = date.getMinutes(); //分
    minute < 10 ? minute = '0' + minute : minute
    var second = date.getSeconds(); //秒
    second < 10 ? second = '0' + second : second
    let time = year + '-' + month + "-" + day + " " + hour + ':' + minute + ':' + second

    return time;
}
module.exports = getCreateTime;