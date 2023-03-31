/* 
Definition
A number is called Automorphic number if and only if its square ends in the same digits as the number itself.

Task
Given a number determine if it Automorphic or not.

Notes
The number passed to the function is positive
*/

// MY SOLUTION
function automorphic(n) {
  const numString = n + "";
  const numSquared = n ** 2 + "";
  if (numSquared.slice(-numString.length) === numString) return "Automorphic";
  return "Not!!";
}

// SOLUTION OF OTHERS
const automorphic = n =>
  String(n * n).endsWith(String(n)) ? "Automorphic" : "Not!!";

const automorphic = n =>
  RegExp(`${n}$`).test(n ** 2) ? "Automorphic" : "Not!!";
