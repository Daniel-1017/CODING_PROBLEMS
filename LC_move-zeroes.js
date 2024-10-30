/* 
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

 

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
 

Constraints:

1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1
*/

const swap = (arr, i1, i2) => {
    const temp = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = temp;
};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = nums => {
    let left = 0;
    for (let right = 0; right < nums.length; right++) {
        if (nums[right] != 0) {
            swap(nums, left, right);
            left++;
        }
    }
    return nums;
};
