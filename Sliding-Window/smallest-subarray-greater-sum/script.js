function smallestSubArray(s, arr) {
  let windowStart = 0;
  let windowSum = 0;
  let minLength = Infinity;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];
    while (windowSum >= s) {
      minLength = Math.min(minLength, windowEnd - windowStart + 1);
      windowSum -= arr[windowStart];
      windowStart++;
    }
  }

  if (minLength === Infinity) return 0;
  return minLength;
}

console.log(
  `Smallest subarray length: ` + smallestSubArray(7, [2, 1, 5, 2, 3, 2])
);
console.log(
  `Smallest subarray length: ` + smallestSubArray(7, [2, 1, 5, 2, 8])
);
console.log(
  `Smallest subarray length: ` + smallestSubArray(8, [3, 4, 1, 1, 6])
);
