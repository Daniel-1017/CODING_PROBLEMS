/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function (nums) {
  const finalArray = [...nums];

  for (let i = 0; i < nums.length; i++) {
    if (finalArray[i] === 0) {
      finalArray.push(0);
      finalArray.splice(i, 1);
    }
  }

  return finalArray;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
