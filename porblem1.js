console.log("hello world");
let a=5;
let b=6;
let num=8;
console.log(a+b);
console.log((a>b ? "a is bigger":"b is bigger"));
console.log((num%2==0 ? "even":"odd"))
console.log((num>0 ? "positve":"negitive"))
console.log("before swap 5 and 6");
let temp=a;
a=b;
b=temp;
console.log("after swap",a," b is ",b);
a=a+b;//a=11
b=a-b;//5
a=a-b//6
console.log("after swap without ",a," b is ",b);
let fact=1;
for(let i=2;i<=num;i++){
    fact=fact*i;
}
console.log("factorial is ",fact);
let fa=10;
let f1=0;
let f2=1;
console.log(f1);
console.log(f2);
for(let i=3;i<=fa;i++){
let next=f1+f2;
console.log(next);
f1=f2;
f2=next;
}
let prime=9;
for(let i=2;i<prime/2;i++){
    if(prime%i==0)
        console.log("not prime number")
}
let an=678;
for(let i=1;i<=an.length;i++){
    
}





