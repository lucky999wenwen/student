/*
 * @Descripttion: 
 * @version: 
 * @Author: wanglong
 * @Date: 2021-02-02 16:21:49
 * @LastEditors: wanglong
 * @LastEditTime: 2021-04-29 16:50:24
 */
function getId(length) {
    return Number(Math.random().toString().substr(3, length) + Date.now()).toString(36);
}
module.exports = getId;