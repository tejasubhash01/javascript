console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");
console.log("A");
setTimeout(() => console.log("B"), 0);
console.log("C");
