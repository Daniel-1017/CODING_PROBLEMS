/* 
Write a recursive function that returns the sum of the odd digits of a number. ... For example, for the input number 321 the function will return 4, and for the input 28 it will return 0.

Use recursion to solve this problem
*/

const sumOddDigits = (n, sum = 0, i = 0) => {
  n += "";
  if (!n[i]) return sum;
  return sumOddDigits(n, sum + (n[i] % 2 ? +n[i] : 0), i + 1);
};

console.log(sumOddDigits(258));
