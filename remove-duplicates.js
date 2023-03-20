/* 
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
  // SOLUTION 1
  const resultArray = [];
  for (let n of nums) {
    if (!resultArray.includes(n)) resultArray.push(n);
  }
  // return resultArray;

  // SOLUTION 2
  return [...new Set(nums)];
};
