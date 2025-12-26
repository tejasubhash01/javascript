function f1() {
    let message = "hello";

    function f2() {
        console.log(message);
    }

    return f2; // return inner function
}

const closureFunc = f1(); // f1 finished execution
closureFunc();            // still prints "hello"
