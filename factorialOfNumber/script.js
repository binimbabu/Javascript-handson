function factorial(val) {
  if (val === 0 || val === 1) return 1;
  else return val * factorial(val - 1);
}

console.log(factorial(3));
