function isPalindrome(str) {
  var cleanStr = str.replace(/[^a-zA-Z0-9]/g).toLowerCase();
  const reversedStr = cleanStr.split("").reverse().join("");

  return cleanStr === reversedStr;
}
console.log(isPalindrome("ma3laya7la9m"));
