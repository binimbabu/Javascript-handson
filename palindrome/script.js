function palindrome(str){
    var reversedString = str.split("").reverse().join("");
    return str === reversedString;
}
console.log(palindrome("malayalam"));