//The following function takes an array of objects and a key to sort the array based on the values in ascending order.

function sortByKey(arr, key) {
  return arr.sort((a, b) => a[key] - b[key]);
}

const data = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
];

const sorted = sortByKey(data, "name");
console.log(sorted);
