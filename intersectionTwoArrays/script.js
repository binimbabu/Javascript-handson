//In the given code set is used to store a unique values from arr2 then filter checks each element in arr1 to see if it is also exist in the set and keeping only those that matches. The output is an array of common elements from both arr1 and arr2.

function interSectionOfTwoArrays(arr1, arr2) {
  set = new Set(arr2);
  return arr1.filter((element) => set.has(element));
}

console.log(interSectionOfTwoArrays([1, 2, 3, 4, 5], [2, 7, 8, 9]));
