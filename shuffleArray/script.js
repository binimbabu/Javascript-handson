let arr = [1, 2, 3, 4, 5];

for (let k = 0; k < 5; k++) {
  // shuffle 5 times
  console.log(shuffleArray([...arr])); // use spread to avoid modifying original
}
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

    // swap arr[i] and arr[j]
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
