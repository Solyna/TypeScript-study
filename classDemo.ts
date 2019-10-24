class ClassExample{
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name=name
        this.age=age
    }
    say(){
        console.log('小哥哥好')
    }

}
/* constructor作用是给类中封装的属性进行赋值 */
let example:ClassExample = new ClassExample('小姐姐',18)
console.log(example)
example.say()

class Father{
    public name:string
    public age:number
    public skill:string
    constructor(name:string,age:number,skill:string){
        this.name=name;
        this.age = age;
        this.skill=skill
    }
    public findSister(){
        console.log('找小姐姐')
    }
}
let fatherObj:Father = new Father('技术群',18,'coding')
fatherObj.findSister();
/* 不支持多重继承 */
class Children extends Father{
    public name:string="大卫"
    public getMoney(){
        console.log('一天赚一个亿')
    }
    /* 重写父类的findSister */
    public findSister(){
        super.findSister()
        console.log('重写找小姐姐')
    }
}

let child = new Children("技术帅",5,'演讲')
child.findSister()
child.getMoney()