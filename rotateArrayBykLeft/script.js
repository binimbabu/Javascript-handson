console.log(rotateLeft([1, 2, 3, 4, 5], 2));

function rotateLeft(arr, k) {
  k = k % arr.length;
  return arr.slice(k).concat(arr.slice(0, k));
}
