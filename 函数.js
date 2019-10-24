"use strict";
/* 有可选参数的函数 */
function searchDemo(age, status) {
    var yy = '';
    yy = '年龄：' + age + '岁';
    if (status != undefined) {
        yy = yy + status;
    }
    return yy;
}
var result = searchDemo(22);
// console.log('有可选参数的函数'+result);
/* 有默认参数的函数 */
function searchDemo1(age, status) {
    if (age === void 0) { age = 18; }
    if (status === void 0) { status = '未婚'; }
    var yy = '';
    yy = '年龄：' + age + '岁';
    if (status != undefined) {
        yy = yy + status;
    }
    return yy;
}
var result = searchDemo1();
// console.log('有默认参数的函数:'+result);
/* 有剩余参数的函数 */
function searchDemo2() {
    var issue = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        issue[_i] = arguments[_i];
    }
    var yy = '';
    for (var i = 0; i <= issue.length; i++) {
        yy = yy + issue[i];
        if (i < issue.length) {
            yy = yy + '、';
        }
    }
    return yy;
}
var result = searchDemo2('22岁', '男', '未婚');
// console.log('有剩余参数的函数:'+result);
/* 第五节：三种函数的定义方法 */
/* 函数声明法 */
function add(n1, n2) {
    return n1 + n2;
}
// console.log(add(1,2))
/* 函数表达式 */
var add1 = function (n1, n2) {
    return n1 + n2;
};
// console.log(add1(1,4))
/* 箭头函数 */
var add2 = function (n1, n2) {
    return n1 + n2;
};
// console.log(add2(2,3))
/* 第六节：函数中变量的作用域 */
/* 全局变量，局部变量 */
/* 变量提升： 内部声明了和全局的变量同名时，就会出现变量提升的效果，
声明语句会提升到作用域顶端（函数的第一句）*/
var name = "刘德华";
function changeName() {
    console.log(name); //undefined
    var name = "马德华";
    console.log(name); //’马德华‘
}
changeName();
console.log(name); //'刘德华'
/* let关键字变量的作用域 */
function changeFace() {
    var facea = "刘德华";
    {
        var faceb = "小沈阳";
        console.log(faceb);
    }
    console.log(facea);
    console.log(faceb);
}
changeFace();
