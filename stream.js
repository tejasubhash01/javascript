function greet(callback) { 
  callback();
}

function sayBye() {
  console.log("Bye!");
} {}{}

greet(sayBye);
