//  implement a function that can efficiently merge two sorted arrays.

function mergeSortedArrays(arr1, arr2) {
  return [...arr1, ...arr2].sort((a, b) => a - b);
}
const a = [1, 3, 5];
const b = [2, 4, 6];

console.log(mergeSortedArrays(a, b));
// Output: [1, 2, 3, 4, 5, 6]
