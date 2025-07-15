//We are using the formula Celsius×9=(Fahrenheit -32) *(5/9) to convert Celsius to Fahrenheit.
//We are using the formula Fahrenheit=(Celsius×9/5)+32 to convert Celsius to Fahrenheit.

function fahrenhitTocelsius(temperature) {
  return (temperature - 32) * (5 / 9);
}
console.log(fahrenhitTocelsius(68));
