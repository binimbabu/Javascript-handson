//count the occurrences of a character in a string

function countChar(arr, char) {
  return arr.split(char).length - 1;
}
console.log(countChar("GeeksForGeeks", "e"));
