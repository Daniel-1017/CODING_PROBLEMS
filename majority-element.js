/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function (nums) {
  const majorityElementVal = Math.ceil(nums.length / 2);
  const obj = {};
  for (let n of nums) {
    obj[n] ? obj[n]++ : (obj[n] = 1);
    if (obj[n] === majorityElementVal) return n;
  }
};

// SOLUTION OF OTHERS
function majorityElement(nums) {
  // Initialize sol and cnt to store the solution and its frequency for respective iterations...
  let sol = 0,
    cnt = 0;
  // For every element i in the array...
  for (let i = 0; i < nums.length; i++) {
    // If cnt is equal to zero, update sol as sol = i
    if (cnt == 0) {
      sol = nums[i];
      cnt = 1;
    }
    // If i is equal to candidate, increment cnt...
    else if (sol == nums[i]) {
      cnt++;
    }
    // Otherwise, decrement cnt...
    else {
      cnt--;
    }
  }
  // Return & print the solution...
  return sol;
}
