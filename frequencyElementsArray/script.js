function frequencyElementsInArray(arr) {
  return arr.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});
}

console.log(frequencyElementsInArray([1, 2, 2, 3, 5, 4, 1, 4]));
