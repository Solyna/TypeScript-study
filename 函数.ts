/* 有可选参数的函数 */
function searchDemo(age:number,status?:string):string{
    let yy:string = ''
    yy = '年龄：'+age+'岁'
    if(status!=undefined){
        yy = yy + status
    }
    return yy
}

var result:string = searchDemo(22)
console.log(result);