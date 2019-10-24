let arr={
    name:"songoo",
    website:"jspang.com",
    age:"18",
    saySomething:function(){
        console.log('为了前端技术')
    }
}
console.log(arr.name)

arr.saySomething()

/* 引用类型：数组Array，字符串String、Date、正则RegExp */
/* 1.声明数组 */
let arr1:number[] //声明一个数值类型的数组
let arr2:Array<boolean>//声明一个布尔类型的数组
/* 2.给数组赋值 */

/* 2-1 字面量赋值法 */
let arr3:number[]=[]//定义一个空数组，数组容量为0
let arr4:number[]=[1,2,3,4]//定义一个数组时，直接给数组赋值
let arr5:Array<string> = ['jspang','技术群']//定义数组的同时给数组辅值
let arr6:Array<boolean> =[true,false]
/* 注意：在TypeScript中指定数据类型的数组只能存储同一类型的数组元素。 */

/* 2-2构造函数赋值法 */
/* 注意赋值要赋单一类型 */
let arr7:number[]=new Array()
let arr8:number[]=new Array(1,2,3)




