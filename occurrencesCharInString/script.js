//count the occurrences of a character in a string

//using split() method
//The countChar() function counts how many times a specified character (char) appears in a string (str). It splits the string into an array using the character, then returns the length of the array (length-1), which gives the count of the character. The given code counts 'G' in 'GeeksForGeeks'.

function countChar(str, character) {
  return str.split(character).length - 1;
}

console.log(countChar("GeeksForGeeks", "G"));
