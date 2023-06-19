/* 
Given any number of boolean flags function should return true if and only if one of them is true while others are false. If function is called without arguments it should return false.

  onlyOne() --> false
  onlyOne(true, false, false) --> true
  onlyOne(true, false, false, true) --> false
  onlyOne(false, false, false, false) --> false  
*/

function onlyOne() {
  if (!arguments.length) return false;
  let count = 0;
  for (let boolean of arguments) if (boolean) count++;
  return count === 1 ? true : false;
}
