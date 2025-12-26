//ways to create object
let object={
    name:"Teja",
    age:23,
    gender:"male",
    postion:"employee"
}
object.name="kowshik";
console.log(object.name);

let object1=new Object();
object1.name="teja";
console.log(object1.name);
class Student {
    constructor(names){
        this.names=names;
    }
    greet(){
        console.log(this.names);
    }
}
const stu=new Student("teja");

stu.greet();
