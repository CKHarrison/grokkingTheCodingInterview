function longest_substring_with_k_distinct(str, k) {
  let windowStart = 0;
  let maxLength = 0;
  let charFrequency = {};
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    let rightChar = str[windowEnd];
    if (!(rightChar in charFrequency)) {
      charFrequency[rightChar] = 0;
    }
    charFrequency[rightChar] += 1;
    while (Object.keys(charFrequency).length > k) {
      let leftChar = str[windowStart];
      charFrequency[leftChar] -= 1;
      if (charFrequency[leftChar] === 0) {
        delete charFrequency[leftChar];
      }
      windowStart++;
    }
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
}

console.log(
  `Length of the longest substring: ` +
    longest_substring_with_k_distinct("araaci", 2)
);
console.log(
  `Length of the longest substring: ` +
    longest_substring_with_k_distinct("araaci", 1)
);
console.log(
  `Length of the longest substring: ` +
    longest_substring_with_k_distinct("cbbebi", 3)
);
