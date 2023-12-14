/* 
Task
Given an array of strings, reverse them and their order in such way that their length stays the same as the length of the original inputs.

Example:
Input:  {"I", "like", "big", "butts", "and", "I", "cannot", "lie!"}
Output: {"!", "eilt", "onn", "acIdn", "ast", "t", "ubgibe", "kilI"}
*/

const ultimateReverse = (arr) => {
  // prettier-ignore
  const revStr = arr.map(w => w.split("").reverse().join``).reverse().join``
  const resArr = [];

  // prettier-ignore
  let i = 0, count = 0
  while (i < revStr.length) {
    resArr.push(revStr.slice(i, i + arr[count].length));
    i += arr[count].length;
    count++;
  }

  return resArr;
};
