//The arrayUnion function merges two arrays (arr1 and arr2) using the spread operator, combines them into a single array, and removes duplicates using Set. It then returns the unique values as a new array. In the given code it outputs [1, 2, 3, 4].

function arrayUnion(arr1, arr2) {
  return [...new Set([...arr1], [...arr2])];
}

console.log(arrayUnion([1, 2, 3], [2, 3, 4]));
