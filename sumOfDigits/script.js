function sumOfDigits(num) {
  let sum = 0;
  const str = num.toString();

  for (let digit of str) {
    sum += Number(digit);
  }

  return sum;
}

console.log(sumOfDigits(1234));
