function createCounter() {
  let count = 0; // 'count' is a variable in the outer function's scope

  function increment() {
    count++; // The inner function 'increment' accesses and modifies 'count'
    return count;
  }

  return increment; // The outer function returns the inner function
}

const counter1 = createCounter(); // 'counter1' is now the 'increment' function
console.log(counter1()); // Output: 1
console.log(counter1()); // Output: 2

const counter2 = createCounter(); // A new closure is created for 'counter2'
console.log(counter2()); // Output: 1 (starts from 0 again)
