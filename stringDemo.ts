let name1:string = "song00"
let name2:String = new String("song")
console.log(name1)
console.log(name2)
console.log(name1.length)
console.log(name2.length)

/* 查找字符串 indexOf */
let something:string = "清晨起来打开窗，心情美美的"
let findName:string = "心情"
/* 需要注意的是，返回的都是字符串的下标。所以返回的值是相同的。并不是返回从后到前的下标位置。 */
console.log(something.indexOf(findName))//从开始查找
console.log(something.lastIndexOf(findName))//从后面查找

