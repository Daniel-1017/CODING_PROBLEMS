/* 
Definition
Jumping number is the number that All adjacent digits in it differ by 1.

Task
Given a number, Find if it is Jumping or not.

Notes
Number passed is always Positive .

Return the result as String .

The difference between ‘9’ and ‘0’ is not considered as 1 .

All single digit numbers are considered as Jumping numbers.

Ex:
jumpingNumber(9) ==> return "Jumping!!"
*/

// MY SOLUTION
function jumpingNumber(n) {
  const strN = String(n);
  for (let i = 0; i < strN.length - 1; i++) {
    if (Math.abs(strN[i] - strN[i + 1]) !== 1) return "Not!!";
  }
  return "Jumping!!";
}

// SOLUTION OF OTHERS
const jumpingNumber = n =>
  n.toString().split``.every((e, i, a) => i < 1 || Math.abs(e - a[i - 1]) === 1)
    ? "Jumping!!"
    : "Not!!";
