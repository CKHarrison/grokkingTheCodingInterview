var checkInclusion = function (s1, s2) {
  let windowStart = 0;
  let matched = 0;
  let charSet = {};
  for (let i = 0; i < s1.length; i++) {
    let char = s1[i];
    if (!(char in charSet)) {
      charSet[char] = 0;
    }
    charSet[char] += 1;
  }

  for (let windowEnd = 0; windowEnd < s2.length; windowEnd++) {
    const rightChar = s2[windowEnd];
    if (rightChar in charSet) {
      charSet[rightChar] -= 1;
      if (charSet[rightChar] === 0) {
        matched++;
      }
    }
    if (matched === Object.keys(charSet).length) {
      return true;
    }

    if (windowEnd >= s1.length - 1) {
      const leftChar = s2[windowStart];
      windowStart++;
      if (leftChar in charSet) {
        if (charSet[leftChar] === 0) {
          matched--;
        }
        charSet[leftChar] += 1;
      }
    }
  }
  return false;
};

console.log(checkInclusion("ab", "eidbaooo"));
console.log(checkInclusion("ab", "eidboaoo"));
console.log(checkInclusion("hello", "ooolleoooleh"));
console.log(checkInclusion("adc", "dcda"));
