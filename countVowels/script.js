console.log(countVowels("javascript"));

function countVowels(str) {
  var vowels = "aeiouAEIOU";
  let count = 0;
  for (let ch of str) {
    if (vowels.includes(ch)) {
      count++;
    }
  }
  return count;
}
