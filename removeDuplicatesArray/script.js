// Remove all duplicates in the array

//Solution 1
// const removeDuplicateArray = (arr) => {
//   return [...new Set(arr)];
// };

// arr = [1, 2, 2, 3, 4, 4, 5, 5];
// console.log(removeDuplicateArray(arr));

//Solution 2
const removeDuplicateArray = (arr) => {
  const result = [];
  arr.forEach((element) => {
    if (!result.includes(element)) {
      result.push(element);
    }
  });
  return result;
};
arr = [1, 2, 2, 3, 4, 4, 5, 5];
console.log(removeDuplicateArray(arr));
