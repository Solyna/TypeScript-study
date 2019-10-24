"use strict";
/*  */
function searchDemo(age, status) {
    var yy = '';
    yy = '年龄：' + age + '岁';
    if (status != undefined) {
        yy = yy + status;
    }
    return yy;
}
var result = searchDemo(22);
console.log(result);
