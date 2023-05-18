/* 
Given an array (a list in Python) of integers and an integer n, find all occurrences of n in the given array and return another array containing all the index positions of n in the given array.

If n is not in the given array, return an empty array [].

Assume that n and all values in the given array will always be integers.

Example:

findAll([6, 9, 3, 4, 3, 82, 11], 3) => [2, 4]
*/

// MY SOLUTION
const findAll = (array, n) => {
  const indexes = [];
  for (let i = 0; i <= array.length; i++) array[i] === n && indexes.push(i);
  return indexes;
};

// SOLUTION OF OTHERS
const findAll = (nums, find) =>
  nums.reduce((acc, num, index) => (num === find ? [...acc, index] : acc), []);
