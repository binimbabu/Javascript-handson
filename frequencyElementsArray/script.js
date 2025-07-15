//print the frequency of elements in an array
function frequencyElementsInArray(arr) {
  let freq = {};
  for (let i = 0; i < arr.length; i++) {
    if (freq[arr[i]]) {
      freq[arr[i]] = freq[arr[i]] + 1;
    } else {
      freq[arr[i]] = 1;
    }
  }
  return freq;
}

console.log(frequencyElementsInArray([1, 2, 2, 3, 5, 4, 1, 4]));
