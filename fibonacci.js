let a=Number(prompt("enter number "));
let b=1;
let n=5;
console.log(a);
console.log(b);
for(let i=2;i<n;i++){
    let fib=a+b;
    a=b;
    b=fib;
    console.log(fib+" ");
}