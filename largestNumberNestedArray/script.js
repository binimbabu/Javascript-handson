// find the largest element in a nested array

arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
];

function largestNumberNestedArray(arr) {
  var largest = arr[0][0];
  for (val of arr) {
    for (num of val) {
      if (num > largest) {
        largest = num;
      }
    }
  }
  return largest;
}
console.log(largestNumberNestedArray(arr));
