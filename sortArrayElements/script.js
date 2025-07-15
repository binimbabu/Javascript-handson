//Sort the array of numbers

//solution 1
// arr = [3, 5, 9, 4, 2];
// const sortArray = arr.sort((a, b) => {
//   return a < b ? -1 : 1;
// });
// console.log(sortArray);

//solution 2
//ascending order

// arr = [3, 5, 9, 4, 2];
// const sortArray = arr.sort((a, b) => a - b);
// console.log(sortArray);

//solution 3
//descending order

arr = [3, 5, 9, 4, 2];
const sortArray = arr.sort((a, b) => b - a);
console.log(sortArray);
