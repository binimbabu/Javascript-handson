//Write a function which helps to achieve multiple(a)(b) and returns product of a and b

// const curryproduct = (a) => {
//   return (b) => {
//     return a * b;
//   };
// };

// const product1 = curryproduct(4);
// console.log(product1(6));
// const product2 = curryproduct(8)(9);
// console.log(product2);

//create a curry function

const curry = function (fn) {
  var arity = fn.length;
  return function func(...args) {
    console.log("f1", args);
    if (args.length >= arity) return fn(...args);
  };
};

const curriedSum = curry((a, b, c) => a + b + c);
console.log(curriedSum(1, 2, 3));
