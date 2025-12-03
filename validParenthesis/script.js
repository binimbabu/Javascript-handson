console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("([)]")); // false
console.log(isValid("{[]}")); // true

function isValid(str) {
  var map = { "(": ")", "{": "}", "[": "]" };
  var stack = [];
  for (var c of str) {
    if (map[c]) {
      stack.push(c);
    } else {
      var last = stack.pop();
      if (map[last] !== c) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
