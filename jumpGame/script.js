//Given an array nums, each element represents your maximum jump length. Determine if you can reach the last index.

console.log(canJump([2, 3, 1, 1, 4])); // true
console.log(canJump([3, 2, 1, 0, 4])); // false

function canJump(arr) {
  var reachable = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i > reachable) return false;
    else {
      reachable = Math.max(reachable, i + arr[i]);
    }
  }
  return true;
}

/*

Each number represents the maximum jump length from that index.

[2, 3, 1, 1, 4]

Index	Value	Meaning
0	2	Can jump to index 1 or 2
1	3	Can jump to index 2, 3, or 4
2	1	Can jump to index 3
3	1	Can jump to index 4
4	4	Already last index
*/
