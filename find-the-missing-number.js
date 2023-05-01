/* 
You are given an unsorted array containing all the integers from 0 to 100 inclusively. However, one number is missing. Write a function to find and return this number. What are the time and space complexities of your solution?
*/

// MY SOLUTION
function missingNo(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (!nums.includes(i)) return i;
  }
}

// SOLUTION OF OTHERS
function missingNo(nums) {
  return 5050 - nums.reduce((a, b) => a + b, 0);
}
