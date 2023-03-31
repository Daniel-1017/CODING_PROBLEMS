/* 
Definition
A Tidy number is a number whose digits are in non-decreasing order.

Task
Given a number, Find if it is Tidy or not.

Notes
Number passed is always Positive.
Return the result as a Boolean
*/

// MY SOLUTION
function tidyNumber(n) {
  const numString = n + "";
  for (let i = 0; i < numString.length - 1; i++) {
    if (numString[i] > numString[i + 1]) return false;
  }
  return true;
}

// SOLUTION OF OTHERS
function tidyNumber(n) {
  return [...(n += "")].sort().join`` == n;
}
