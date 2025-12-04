function flattenArray(arr) {
  var result = [];
  arr.forEach((element) => {
    if (Array.isArray(element)) {
      result = result.concat(flattenArray(element));
    } else result.push(element);
  });
  return result.sort((a, b) => b - a);
}

console.log(flattenArray([1, 2, [3, 4, 5], 6, 7, [2, 9, [1]]]));
