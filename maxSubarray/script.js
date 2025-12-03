function maxSubarray(arr) {
  var cur = arr[0];
  var maxArray = arr[0];
  for (let i = 0; i < arr.length; i++) {
    cur = Math.max(arr[i], cur + arr[i]);
    maxArray = Math.max(maxArray, cur);
  }
  return maxArray;
}

console.log(maxSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

//Maximum Subarray (Kadane’s Algorithm) here [4, -1, 2, 1] is the maximum sum subarray
//Given an integer array, return the largest sum of a contiguous subarray.
