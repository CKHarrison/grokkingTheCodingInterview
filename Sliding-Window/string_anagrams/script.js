function string_anagrams(str, pattern) {
  let windowStart = 0;
  let matched = 0;
  let charFrequency = {};
  let result = [];
  for (let i = 0; i < pattern.length; i++) {
    let item = pattern[i];
    if (!(item in charFrequency)) {
      charFrequency[item] = 0;
    }
    charFrequency[item] += 1;
  }
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    if (rightChar in charFrequency) {
      charFrequency[rightChar] -= 1;
      if (charFrequency[rightChar] === 0) {
        matched += 1;
      }
    }

    if (matched === Object.keys(charFrequency).length) {
     result.push(windowStart);
    }

    if (windowEnd >= pattern.length - 1) {
      const leftChar = str[windowStart];
      windowStart++;
      if (leftChar in charFrequency) {
        if (charFrequency[leftChar] === 0) {
          matched -= 1;
        }
        charFrequency[leftChar] += 1;
      }
    }
  }
  return result;
}

console.log(string_anagrams("ppqp", "pq"));
console.log(string_anagrams("abbcabc", "abc"));
