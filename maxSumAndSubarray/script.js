console.log(maxSubArrayWithElements([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

function maxSubArrayWithElements(arr) {
  var maxSum = arr[0];
  var curSum = arr[0];
  var start = 0,
    end = 0,
    tempStart = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > curSum + arr[i]) {
      curSum = arr[i];
      tempStart = i;
    } else {
      curSum = curSum + arr[i];
    }
    if (curSum > maxSum) {
      maxSum = curSum;
      start = tempStart;
      end = i;
    }
  }

  return { maxSum, subArray: arr.slice(start, end + 1) };
}
