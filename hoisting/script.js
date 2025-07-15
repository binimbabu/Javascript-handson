console.log(myVar); // Output: undefined
var myVar = 10;
console.log(myVar); // Output: 10

myFunction(); // Output: "Hello from myFunction!"
function myFunction() {
  console.log("Hello from myFunction!");
}

console.log(myLetVar); // Throws ReferenceError: Cannot access 'myLetVar' before initialization
let myLetVar = 20;
console.log(myLetVar); // Output: 20
