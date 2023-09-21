/* 
Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal 
substring consisting of non-space characters only.

Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
*/

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function (s) {
  return s.match(/[a-z]+/gi).at(-1).length;
};
