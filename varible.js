/*var a=3;
function test(){
    if(true){
        var x=5;
    }                   //function scope not block scope
    console.log(x);
}
test();
var y=10;
var y=20;           //redeclarable
y=30;
console.log(y);
console.log(xy);//undefined
var xy=5;//op:undefined
//the drawbacks are it can occur unepected bugs and function scope
for(var i=0;i<3;i++){
    console.log(i);
}

//let keyword 

console.log("let keyword");

function hello(){
    for(let i=1;i<5;i++){
    console.log(c); //not redeclarable
    }
}
hello();
//console.log(c);
//cont keyword
*/
//reassignment and reclaration not possible and block scope
for(let i=1;i<=100;i++){
    num=i;
    if(num%2==0){
        console.log(num);
    }
}