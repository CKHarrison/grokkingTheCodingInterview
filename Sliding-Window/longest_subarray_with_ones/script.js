function longestSubarrayOnes(arr, k) {
  let windowStart = 0;
  let maxOnesCount = 0;
  let maxLength = 0;
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    if (arr[windowEnd] === 1) {
      maxOnesCount++;
    }
    if (windowEnd - windowStart + 1 - maxOnesCount > k) {
      if (arr[windowStart] === 1) {
        maxOnesCount -= 1;
      }
      windowStart++;
    }
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  return maxLength;
}

console.log(longestSubarrayOnes([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], 2));
console.log(longestSubarrayOnes([0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], 3));
