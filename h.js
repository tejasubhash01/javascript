let x=55;
let y="55";
let z=String(x);
let s=Number(y);
console.log(s===x);
x="55";
if(x===55){
    console.log("x is bigger");
}else if(x===55){
    console.log("elseif");
}
else{
    console.log("else");
}
let g= x%2===0 ? "even" : "odd";
console.log(g);
let a=0;
do{
 console.log("a");
    a--;
}
while(a>=0);
let sw=1;
switch(sw){
    case 0:
        console.log("0");
        break;
    case 1:
        console.log("1");
        
    default:
        console.log("def");

}

