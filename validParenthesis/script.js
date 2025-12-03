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
      var last = stack.pop(); //The stack stores opening brackets in order. pop() removes the most recently added opening bracket (LIFO behavior: Last-In-First-Out).
      if (map[last] !== c) {
        //Checks if the popped opening bracket matches the closing bracket
        return false;
      }
    }
  }
  return stack.length === 0;
}
