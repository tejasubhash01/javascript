let arr1=[1,2,3,4,5,6,7];
let vowles=['a','e',4,'u']
console.log(vowles.toString());
let arr2=["teja","lucky","sunny"];
let arr3=["teja",1,"lucky",2,"sunny",3]
let arr4=["teja","mani","teja","mani","teja","mani"]
arr1.includes(3);
console.log(arr1[0]);
console.log(arr2[0]);
console.log(arr3[0]);
for(let i=0;i<arr1.length;i++){
    console.log(arr1[i],arr2[i],arr3[i]);
}
console.log("Array methods");
arr1.push(5);
arr1.pop();
arr1.unshift(123);
arr1.shift();
console.log(arr1.map(x=>x**2));
console.log(arr2.filter(x=>x==="teja"));
console.log(arr2.reduce(x=>(x,y)=>x+y,0))
console.log(arr1.find(x=>x%2===0));
console.log(arr1.every(x=>x%2===0));
console.log(arr1.some(x=>x%2===0));
const l=arr4.reduce((acc,item)=>{
    acc[item]=(acc[item] || 0)+1;
    return acc;
},{});
console.log(l);
const fruits = ["apple", "banana", "apple"];

const count = fruits.reduce((acc, item) => {
  acc[item] = (acc[item] || 0) + 1;
  return acc;
}, {});

console.log(count);
// { apple: 2, banana: 1 }
arr1.forEach(x=>
    {
        console.log(x);
    });
