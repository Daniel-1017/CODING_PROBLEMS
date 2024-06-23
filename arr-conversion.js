/* 
Task
Given an array of 2k integers (for some integer k), perform the following operations until the array contains only one element:

On the 1st, 3rd, 5th, etc. 
iterations (1-based) replace each pair of consecutive elements with their sum;
On the 2nd, 4th, 6th, etc. 
iterations replace each pair of consecutive elements with their product.
After the algorithm has finished, there will be a single element left in the array. Return that element.

Example
For inputArray = [1, 2, 3, 4, 5, 6, 7, 8], the output should be 186.

We have [1, 2, 3, 4, 5, 6, 7, 8] -> [3, 7, 11, 15] -> [21, 165] -> [186], so the answer is 186.

Input/Output
[input] integer array arr

Constraints: 21 ≤ arr.length ≤ 25, -9 ≤ arr[i] ≤ 99.

[output] an integer
*/

const arrayConversion = (arr, even = true) => {
  if (arr.length === 1) return arr[0];

  const result = [];
  for (let i = 0; i < arr.length; i += 2) {
    const section = arr.slice(i, i + 2);
    if (even) {
      result.push(section.reduce((acc, n) => acc + n, 0));
    } else {
      result.push(section.reduce((acc, n) => acc * n, 1));
    }
  }

  return arrayConversion(result, !even);
};
