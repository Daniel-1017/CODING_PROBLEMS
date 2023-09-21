/* 
Task
You are given a sequence of positive ints where every element appears three times, except one that appears only once (let's call it x) and one that appears only twice (let's call it y).

Your task is to find x * x * y.

Example
For arr=[1, 1, 1, 2, 2, 3], the result should be 18

3 x 3 x 2 = 18

For arr=[6, 5, 4, 100, 6, 5, 4, 100, 6, 5, 4, 200], the result should be 4000000

200 x 200 x 100 = 4000000

Input/Output
[input] integer array arr
an array contains positive integers.

[output] an integer
The value of x * x * y
*/

function missingValues(arr) {
  const hash = {};
  for (let n of arr) {
    hash[n] = (hash[n] || 0) + 1;
  }
  let once, twice;
  for (let key in hash) {
    if (hash[key] === 1) once = key;
    if (hash[key] === 2) twice = key;
  }

  return once * once * twice;
}
