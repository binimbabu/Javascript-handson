let arr = [1, 2, [3, 4, 5], 6, 7, [2, 9, [1]]];

console.log(flattenArray(arr));

function flattenArray(arr) {
  return arr.flat(Infinity);
}
