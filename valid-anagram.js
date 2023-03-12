/* 
Given two strings s and t, return true if t is an anagram of s, and false otherwise.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const obj = {};
  for (let i of s) {
    if (obj[i]) {
      obj[i]++;
    } else {
      obj[i] = 1;
    }
  }
  for (let i of t) {
    if (obj[i]) {
      obj[i]--;
    } else {
      obj[i] = 1;
    }
  }
  return Object.values(obj).filter(i => i !== 0).length > 0 ? false : true;
};
