/* 
Definition
A number is a Special Number if it’s digits only consist 0, 1, 2, 3, 4 or 5

Given a number determine if it special number or not .

Warm-up (Highly recommended)
Playing With Numbers Series
Notes
The number passed will be positive (N > 0) .

All single-digit numbers within the interval [1:5] are considered as special number.

Input >> Output Examples
specialNumber(2) ==> return "Special!!"
Explanation:
It's a single-digit number within the interval [1:5] .

specialNumber(9) ==> return "NOT!!"
*/

// MY SOLUTION
function specialNumber(n) {
  n = n.toString();
  const notSpecial = ["6", "7", "8", "9"];
  for (let i of notSpecial) {
    if (n.indexOf(i) !== -1) return "NOT!!";
  }
  return "Special!!";
}

// SOLUTION OF OTHERS
function specialNumber(n) {
  return /[6-9]/.test(n) ? "NOT!!" : "Special!!";
}
