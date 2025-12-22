let a=5;
let b=6;
if(a>b){
    console.log("a is bigger");
}
else{
    console.log("b is bigger");
}
let num=7;
if(num%2===0){
    console.log("even");
}else{
    console.log("false");
}
let day = 3;
let dayName;

switch(day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  default:
    dayName = "Invalid day";
}

console.log(dayName);
