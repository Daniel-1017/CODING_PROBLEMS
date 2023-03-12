/* 
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
You must implement a solution with a linear runtime complexity and use only constant extra space.

Example 1:
Input: nums = [2,2,1]
Output: 1

Example 2:
Input: nums = [4,1,2,1,2]
Output: 4
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function (nums) {
  const obj = {};
  for (let i of nums) {
    obj[i] ? obj[i]++ : (obj[i] = 1);
  }
  for (let i of Object.keys(obj)) {
    if (obj[i] === 1) return +i;
  }
};

singleNumber([4, 1, 2, 1, 2]);
