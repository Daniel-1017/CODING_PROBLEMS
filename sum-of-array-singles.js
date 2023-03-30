/* 
In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

More examples in the test cases.

Good luck!
*/

// MY SOLUTION
function repeats(arr) {
  const finalArray = [];
  for (let n of arr) {
    if (!finalArray.includes(n)) {
      finalArray.push(n);
    } else {
      finalArray.splice(finalArray.indexOf(n), 1);
    }
  }
  return finalArray.reduce((acc, curr) => acc + curr, 0);
}

// SOLUTION OF OTHERS
function repeats(arr) {
  return arr
    .filter(v => arr.indexOf(v) === arr.lastIndexOf(v))
    .reduce((a, b) => a + b, 0);
}
