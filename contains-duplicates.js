/* 
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:
Input: nums = [1,2,3,1]
Output: true

Example 2:
Input: nums = [1,2,3,4]
Output: false
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate(nums) {
  const originalNums = nums.join("");
  const uniqueNums = [...new Set(nums)].join("");
  return originalNums !== uniqueNums;
}

// SOLUTION OF OTHERS
const containsDuplicate = function (nums) {
  const s = new Set(nums);
  return s.size !== nums.length;
};

const containsDuplicate = function (nums) {
  nums.sort((a, b) => a - b);
  for (let i = 0; i <= nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      return true;
    }
  }
  return false;
};
