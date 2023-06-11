/* 
Write a program to determine if the two given numbers are coprime. A pair of numbers are coprime if their greatest shared factor is 1.

The inputs will always be two positive integers between 2 and 99.

Examples
20 and 27:

Factors of 20: 1, 2, 4, 5, 10, 20
Factors of 27: 1, 3, 9, 27
Greatest shared factor: 1
Result: 20 and 27 are coprime
12 and 39:

Factors of 12: 1, 2, 3, 4, 6, 12
Factors of 39: 1, 3, 13, 39
Greatest shared factor: 3
Result: 12 and 39 are not coprimes
*/

// MY SOLUTION
function isCoprime(x, y) {
  const factorsX = [],
    factorsY = [];
  for (let i = 1; i <= Math.max(x, y); i++) {
    if (i < x) {
      if (x % i === 0) factorsX.push(i);
    }

    if (i < y) {
      if (y % i === 0) factorsY.push(i);
    }
  }
  factorsX.push(x);
  factorsY.push(y);

  const minLenArr = factorsX.length > factorsY.length ? factorsY : factorsX;

  let commonFactor;

  for (let i = 0; i < Math.min(factorsX.length, factorsY.length); i++) {
    if (minLenArr === factorsX) {
      if (factorsY.includes(factorsX[i])) commonFactor = factorsX[i];
    } else {
      if (factorsX.includes(factorsY[i])) commonFactor = factorsY[i];
    }
  }

  return commonFactor === 1 || false;
}

// SOLUTION OF OTHERS
function isCoprime(x, y) {
  const min = Math.min(x, y);

  for (let i = 2; i <= min; i++) {
    if (x % i === 0 && y % i === 0) {
      return false;
    }
  }

  return true;
}
