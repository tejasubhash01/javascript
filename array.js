let marks=["teja",3,"myname",true];
marks.push(456);
marks.pop();
marks.shift();
console.log(marks.length);        // size
console.log(marks.indexOf(3));   // index or -1
console.log(marks.includes(3) ); // true / false

console.log(marks);
for(let i=0;i<marks.length;i++){
console.log(marks[i]);
}
let mark=[33,44,55,66,77,88,99]
let avg=0;
for(let i in mark){
    avg+=mark[i];
}
console.log(avg/mark.length);