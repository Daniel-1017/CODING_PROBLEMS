/* 
Given an array containing only integers, add all the elements and return the binary equivalent of that sum.
*/

function arr2bin(arr) {
  let count = 0;
  for (let n of arr) {
    if (isInteger(n)) return false;
    count += n;
  }
  return count.toString(2);
}
