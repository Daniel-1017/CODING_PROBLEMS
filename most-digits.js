/*
Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.
*/

// MY SOLUTION
const digitCount = (num) => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

function findLongest(array) {
  const digits = array.map((num) => digitCount(num));
  return array[digits.indexOf(Math.max(...digits))];
}

// OTHERS SOLUTION
const findLongest = (l) =>
  l.reduce((a, b) => (`${b}`.length > `${a}`.length ? b : a));
