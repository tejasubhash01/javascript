let a = 10;
let b = 15;
if (a > b) {
  a = a + b;
  b = a - b;
  a = a - b;
}
else{
    b=a+b;
    a=b-a;
    b=b-a;
}
console.log("a: "+a+" b: "+b);
