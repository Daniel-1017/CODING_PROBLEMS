/* 
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

Example 1:
Input: x = 123
Output: 321

Example 2:
Input: x = -123
Output: -321
*/

/**
 * @param {number} x
 * @return {number}
 */
const reverse = function (x) {
  const res = +String(Math.abs(x)).split("").reverse().join("");
  if (res >= 2_147_483_647 || res < -2_147_483_648) return 0;
  return x < 0 ? res * -1 : res;
};
