/* 
Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.
*/

// MY SOLUTION
function mygcd(x, y) {
  return gcd(x, y);
}

function gcd(a, b) {
  while (a != b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  return a;
}

// SOLUTION OF OTHERS
function mygcd(x, y) {
  return y == 0 ? x : mygcd(y, x % y);
}
