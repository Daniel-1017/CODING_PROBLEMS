const getDigit = (num, place) => {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
};

const digitCount = (num) => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

const mostDigits = (nums) => {
  let maxDigits = 0;
  for (let n of nums) {
    maxDigits = Math.max(maxDigits, digitCount(n));
  }
  return maxDigits;
};

const radixSort = (array) => {
  const maxDigits = mostDigits(array);
  for (let k = 0; k < maxDigits; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < array.length; i++) {
      const digit = getDigit(array[i], k);
      digitBuckets[digit].push(array[i]);
    }
    array = [].concat(...digitBuckets);
  }
  return array;
};

radixSort([3456, 123, 4421, 5569, 2213, 538, 4210, 5334, 5127, 126]);
