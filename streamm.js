let arr=[4,56,7,8,9,7]
const store=arr.map(num=>num**2);
console.log(store);
console.log(arr.filter(num=>num%2===0));
console.log(arr.reduce((a,b)=>a+b,0));