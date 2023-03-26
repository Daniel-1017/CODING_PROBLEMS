/* 
Your task is to write function factorial.

https://en.wikipedia.org/wiki/Factorial
*/

// MY SOLUTION
function factorial(n) {
  let factorialRes = 1;
  while (n >= 1) {
    factorialRes *= n;
    n--;
  }
  return factorialRes;
}

// SOLUTION OF OTHERS
const factorial = n => (n ? factorial(n - 1) * n : 1);
