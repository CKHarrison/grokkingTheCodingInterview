const fruitsIntoBaskets = (fruits) => {
  let windowStart = 0;
  let maxLength = 0;
  let fruitFrequency = {};
  for (let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
    const rightFruit = fruits[windowEnd];
    if (!(rightFruit in fruitFrequency)) {
      fruitFrequency[rightFruit] = 0;
    }
    fruitFrequency[rightFruit] += 1;
    while (Object.keys(fruitFrequency).length > 2) {
      let leftFruit = fruits[windowStart];
      fruitFrequency[leftFruit] -= 1;
      if (fruitFrequency[leftFruit] === 0) {
        delete fruitFrequency[leftFruit];
      }
      windowStart++;
    }
    let currentLength = windowEnd - windowStart + 1;
    maxLength = maxLength > currentLength ? maxLength : currentLength;
  }
  return maxLength;
};

console.log(
  `Maximum number of fruits: ` + fruitsIntoBaskets(["A", "B", "C", "A", "C"])
);
console.log(
  `Maximum number of fruits: ` +
    fruitsIntoBaskets(["A", "B", "C", "B", "B", "C"])
);
