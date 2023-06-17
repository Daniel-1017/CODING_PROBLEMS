/* 
Create a Function that takes one parameter and returns its square root rounded to 5 decimal places. You are not allowed to use the Math.sqrt() or the Math.pow() methods.

Trailing zeros should be left out. For example

squareRoot(39) // => 6.245;
rather than

squareRoot(39) // => 6.24500;
*/

const square = (n, i, j) => {
  let mid = (i + j) / 2;
  let mul = mid * mid;
  if (mul === n || Math.abs(mul - n) < 0.00001) {
    return mid;
  } else if (mul < n) {
    return square(n, mid, j);
  } else {
    return square(n, i, mid);
  }
};

// Function to find the square root of n
const findSqrt = num => {
  let i = 1;
  const found = false;
  while (!found) {
    // If n is a perfect square
    if (i * i === num) {
      return i;
    } else if (i * i > num) {
      let res = square(num, i - 1, i);
      return res;
    }
    i++;
  }
};

// MY SOLUTION
function squareRoot(x) {
  return +findSqrt(x).toFixed(5);
}

// SOLUTION OF OTHERS
function squareRoot(x) {
  return +(x ** 0.5).toFixed(5);
}
