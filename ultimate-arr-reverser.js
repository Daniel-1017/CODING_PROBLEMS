/* 
Task
Given an array of strings, reverse them and their order in such way that their length stays the same as the length of the original inputs.

Example:
Input:  {"I", "like", "big", "butts", "and", "I", "cannot", "lie!"}
Output: {"!", "eilt", "onn", "acIdn", "ast", "t", "ubgibe", "kilI"}
Good luck!
*/

const ultimateReverse = (arr) => {
  const reversedString = [...[...arr].join``].reverse().join``.replaceAll(" ", "")
  
  const res = []


  let i = 0, j = 0
  while (i < arr.length) {
    res.push(reversedString.slice(j, arr[i].length + j))
    j += arr[i].length
    i++
  }

  return res
};
