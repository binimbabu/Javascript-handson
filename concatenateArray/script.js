//Write a function which can concatenate two arrays

const mergeArrays = (arr1, arr2) => {
  return arr1.concat(arr2);
};
var arr1 = [1];
var arr2 = [12, 4];
const result = mergeArrays(arr1, arr2);
console.log(result);
console.log(arr1);
console.log(arr2);

//concatenate 3 arrays
var arr4 = [1, 2, 3];
var arr5 = [4, 5, 6];
var arr6 = [7, 8, 9];

const mergeThreeArrays = arr4.concat(arr5, arr6);
console.log(mergeThreeArrays);
