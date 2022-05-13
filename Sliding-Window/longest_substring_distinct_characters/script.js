// Neetcode way of solving the problem using sets
const NeetNonRepeatSubstring = (str) => {
  let leftPointer = 0;
  let rightPointer = 0;
  let charSet = new Set();
  let maxLength = 0;
  while (rightPointer < str.length) {
    while (charSet.has(str[rightPointer])) {
      charSet.delete(str[leftPointer]);
      leftPointer++;
    }
    charSet.add(str[rightPointer]);
    let currentLength = rightPointer - leftPointer + 1;
    maxLength = maxLength > currentLength ? maxLength : currentLength;
    rightPointer++;
  }
  return maxLength;
};

// Grokking solution
function nonRepeatSubstring(str) {
  let windowStart = 0;
  let maxLength = 0;
  let charIndexMap = {};
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    let rightChar = str[windowEnd];
    // If map contains rightChar shrink window from beginning so map will
    // only have one occurence of rightChar
    if (rightChar in charIndexMap) {
      // this is tricky; in the current window, we will not have any 'rightChar' after
      // its previous index and if 'windowStart' is already ahead of the last index of
      // 'rightChar', we'll keep 'windowStart'
      windowStart = Math.max(windowStart, charIndexMap[rightChar] + 1);
    }
    // insert rightChar into map
    charIndexMap[rightChar] = windowEnd;
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  return maxLength;
}

console.log(
  `Length of the longest substring: ${nonRepeatSubstring("aabccbb")}`
);
console.log(`Length of the longest substring: ${nonRepeatSubstring("abbbb")}`);
console.log(`Length of the longest substring: ${nonRepeatSubstring("abccde")}`);
