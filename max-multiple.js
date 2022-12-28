/*
Task
Given a Divisor and a Bound , Find the largest integer N , Such That ,

Conditions :
N is divisible by divisor

N is less than or equal to bound

N is greater than 0.

Notes
The parameters (divisor, bound) passed to the function are only positive values .
It's guaranteed that a divisor is Found .
Input >> Output Examples
maxMultiple (2,7) ==> return (6)
Explanation:
(6) is divisible by (2) , (6) is less than or equal to bound (7) , and (6) is > 0 .


*/

// MY SOLUTION
function maxMultiple(divisor, bound) {
  let max;
  for (let i = divisor; i <= bound; i++) {
    if (i % divisor === 0) max = i;
  }
  return max;
}

// SOLUTION OF OTHERS
function maxMultiple(divisor, bound) {
  return bound - (bound % divisor);
}

function maxMultiple(divisor, bound) {
  return Math.floor(bound / divisor) * divisor;
}
