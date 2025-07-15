function countCharacterOccurrences(str) {
  var count = {};
  for (let c of str) {
    count[c] = (count[c] || 0) + 1;
  }
  return count;
}
console.log(countCharacterOccurrences("malayalam"));
