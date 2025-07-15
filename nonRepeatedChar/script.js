//First Non-Repeated Character in a String

function fun(str) {
  const charCount = {};

  // count the occurrences of each character
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // find the first non-repeated character
  for (let char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  return null;
}

console.log(fun("GeeksForGeeks"));
