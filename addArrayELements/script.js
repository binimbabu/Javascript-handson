//Write a function which get's an array and an element and returns an array with this element at the end
const numbers = [1, 2];
const append = function (arr, el) {
  return [...arr, el];
};
const num = append(numbers, 3);
console.log(num);
console.log(numbers);
