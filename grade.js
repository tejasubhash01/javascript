/*num=90;
if(num>=90){
    console.log("Grade A");
}
else if(num>80 || num<90){
    console.log("Grade B");
}
else {
    console.log("Grade C");
}*/
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter marks: ", (marks) => {
  marks = Number(marks);

  if (marks >= 90) {
    console.log("Grade A");
  } else if (marks >= 80) {
    console.log("Grade B");
  } else {
    console.log("Grade C");
  }

  rl.close();
});
