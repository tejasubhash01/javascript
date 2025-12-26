console.log("hello world");
let a=4;
let b=6;
console.log("two number add",a+b);
console.log((a>b ? "a is bigger" :"b is bigger"));
let c=7;
if(a>b && a>c){
    console.log("a is bigger of three numbers");
}else if(b>a && b>c){
    console.log("b is bigger of three numbers");
}else{
    console.log("c is biggger of three numbers");
}
console.log((a%2===0 ? "even":"odd"))
for(let i=a;i<=b;i++){
    for(let j=2;j<b/2;j++){
    if(i%j!==0)
    console.log(i,"prime number");
    }
}
let n = 1234;
let rev = 0;

while (n !== 0) {
  let digit = n % 10;
  rev = rev * 10 + digit;
  n = Math.floor(n / 10);
}

console.log(rev);   // 4321

