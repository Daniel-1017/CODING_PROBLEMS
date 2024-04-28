/* 
In this Kata you have to find the factors of integer down to the limit including the limiting number. There will be no negative numbers. Return the result as an array of numbers in ascending order.

If the limit is more than the integer, return an empty list

As a challenge, see if you can do it in one line
*/

// SOLUTION 1
const factors = (integer, limit) => {
  const foundFactors = [];
  for (let i = integer; i >= limit; i--) {
    if (!(integer % i)) foundFactors.unshift(i);
  }
  return foundFactors;
};

// SOLUTION 2
const factors = (integer, limit) => Array.from({ length: integer }, (_, i) => i + 1).slice(limit - 1).filter(n => !(integer % n));
