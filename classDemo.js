"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ClassExample = /** @class */ (function () {
    function ClassExample(name, age) {
        this.name = name;
        this.age = age;
    }
    ClassExample.prototype.say = function () {
        console.log('小哥哥好');
    };
    return ClassExample;
}());
/* constructor作用是给类中封装的属性进行赋值 */
var example = new ClassExample('小姐姐', 18);
console.log(example);
example.say();
var Father = /** @class */ (function () {
    function Father(name, age, skill) {
        this.name = name;
        this.age = age;
        this.skill = skill;
    }
    Father.prototype.findSister = function () {
        console.log('找小姐姐');
    };
    return Father;
}());
var fatherObj = new Father('技术群', 18, 'coding');
fatherObj.findSister();
/* 不支持多重继承 */
var Children = /** @class */ (function (_super) {
    __extends(Children, _super);
    function Children() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "大卫";
        return _this;
    }
    Children.prototype.getMoney = function () {
        console.log('一天赚一个亿');
    };
    /* 重写父类的findSister */
    Children.prototype.findSister = function () {
        _super.prototype.findSister.call(this);
        console.log('重写找小姐姐');
    };
    return Children;
}(Father));
var child = new Children("技术帅", 5, '演讲');
child.findSister();
child.getMoney();
