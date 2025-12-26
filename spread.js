//SPREAD OPERATOR
let arr1=[1,2,3,4,5]
let arr2=[...arr1]
console.log(arr2);
let arr3=[4,5,6,7,8]////for cloning the ARRAY WE USE SPREAD OPERATOR
let arr4=[6,7,8,9]
let merged=[...arr3,...arr4]
console.log(merged)
//REST OPERATOR to collect multiple elements from te function 
function sum(...numbers){
    let total=0;
    for(let n of numbers){
        total+=n;
    }
    return total;
}
console.log(sum(10,20,30));
function display(name,...skills){
    console.log(name+skills);
}
display("teja","js","lk","py","jt","ntg");
