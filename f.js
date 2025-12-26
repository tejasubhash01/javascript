function greet(){
    let a=5;
    let b;
}
greet();
const teja=(t)=>{
    console.log(t);
}
teja(5);
const f1=(value1,callback)=>{
    console.log(value1);
    callback("value2");
}
    const f2=(value2)=>{
        console.log(value2);
    }

f1("value1",f2);
