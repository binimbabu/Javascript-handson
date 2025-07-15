console.log(1 + "2"); //The code console.log(1 + '2'); adds the number 1 and the string '2'. In JavaScript, when a number and a string are combined with +, the number is converted to a string. Finally, it results in the string '12', which is then prints to the console.

console.log("6" - 1); //'6' is a string, so when you use the '-' operator with string and number, JavaScript convert the string to a number automatically which is called type coercion. '6' gets converted to the number 6, then 6 - 1 = 5. So, 5 is the answer.

console.log(1 === "1"); //'1' is a integer and '1' is a string. Strict equality operator(===) check both the type and the value. They look similar but they have different data type. So =, the answer in false.

console.log(null == undefined); //'null' represents the absence of any value and 'undefined' represents a variable that has been declared but not assigned any value. The answer is true because JavaScript treats them equal because of '==' loose equality operator.
