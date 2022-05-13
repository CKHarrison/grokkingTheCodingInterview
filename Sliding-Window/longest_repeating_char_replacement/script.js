// NEETCODE SOLTUION
var characterReplacement = function (s, k) {
  let windowStart = 0;
  let charFreq = {};
  let result = 0;
  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    let rightChar = s[windowEnd];
    if (!(rightChar in charFreq)) {
      charFreq[rightChar] = 0;
    }
    charFreq[rightChar] += 1;
    while (windowEnd - windowStart + 1 - max(charFreq) > k) {
      let leftChar = s[windowStart];
      charFreq[leftChar] -= 1;
      windowStart++;
    }
    result = Math.max(result, windowEnd - windowStart + 1);
  }
  return result;
};

function max(obj) {
  let max = 0;
  for (let item in obj) {
    if (obj[item] > max) {
      max = obj[item];
    }
  }
  return max;
}

console.log(characterReplacement("ABAB", 2));

// Grokking Solution
function length_of_longest_substring(str, k) {
  let windowStart = 0;
  let maxLength = 0;
  let maxRepeatingLetter = 0;
  let frequencyMap = {};
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    if (!(rightChar in frequencyMap)) {
      frequencyMap[rightChar] = 0;
    }
    frequencyMap[rightChar] += 1;
    maxRepeatingLetter = Math.max(maxRepeatingLetter, frequencyMap[rightChar]);

    if (windowEnd - windowStart + 1 - maxRepeatingLetter > k) {
      const leftChar = str[windowStart];
      frequencyMap[leftChar] -= 1;
      windowStart++;
    }
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  return maxLength;
}

console.log(length_of_longest_substring("aabccbb", 2));
console.log(length_of_longest_substring("abbcb", 1));
console.log(length_of_longest_substring("abccde", 1));
