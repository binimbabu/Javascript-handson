function minimumAndMaximumInArray(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  return [min, max];
}
console.log(minimumAndMaximumInArray([19, 34, 23, 45]));
