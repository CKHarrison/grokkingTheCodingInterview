function findMaxSubarrayOfSizeK(array, k) {
  if (array === null || array.length === 0) return 0;
  let windowStart = 0;
  let maxSum = 0;
  let currentWindow = 0;
  for (let windowEnd = 0; windowEnd < array.length; windowEnd++) {
    currentWindow += array[windowEnd];
    if (windowEnd >= k - 1) {
      maxSum = Math.max(maxSum, currentWindow);
      // remove the first element from window
      currentWindow -= array[windowStart];
      windowStart++;
    }
  }
  return maxSum;
}

console.log(findMaxSubarrayOfSizeK([2, 1, 5, 1, 3, 2], 3));
console.log(findMaxSubarrayOfSizeK([2, 3, 4, 1, 5], 2));
