class Arithematic{
    constructor(a,b){
        this.a=a;
        this.b=b;
    }
    addtion(){
        return this.a+this.b;
    }
    subraction(){
        return this.a-this.b;
    }
}
const p=new Arithematic(6,7);
const readline=require("readline");
const r1=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
r1.question("enter your operation:",(name)=>{
    r1.close();
});
if(name== "+"){
        console.log(p.addtion());
    }
    else{
        console.log(p.subraction());
    }