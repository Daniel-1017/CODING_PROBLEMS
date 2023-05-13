/* 
Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran), check if the array contains three and two of the same values.

Examples
["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
["a", "a", "a", "a", "a"] ==> false // 5x "a"
*/

function checkThreeAndTwo(array) {
  const obj = {};
  for (let i of array) obj[i] = (obj[i] || 0) + 1;
  return Object.values(obj).includes(2) && Object.values(obj).includes(3)
    ? true
    : false;
}
