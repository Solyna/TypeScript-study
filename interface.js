"use strict";
/* 接口 */
/* 可选参数的接口 */
/* interface Husband{
    sex:string,
    interest:string,
    buy?:Boolean
}

let myhusband:Husband = {
    sex:'男',
    interest:'看书，做家务'
}

console.log(myhusband) */
var mySearch;
mySearch = function (source, subString) {
    var flag = source.search(subString);
    return (flag != -1);
};
console.log(mySearch('高，富，帅', '帅'));
