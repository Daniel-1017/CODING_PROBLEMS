/* 
Complete the function that takes a list of numbers (nums), as the only argument to the function. Take each number in the list and square it if it is even, or square root the number if it is odd. Take this new list and return the sum of it, rounded to two decimal places.

The list will never be empty and will only contain values that are greater than or equal to zero.
*/

const sumSquareEvenRootOdd = ns => {
  for (let i = 0; i < ns.length; i++) {
    if (ns[i] % 2) ns[i] = Math.sqrt(ns[i]);
    else ns[i] = Math.pow(ns[i], 2);
  }
  return +ns.reduce((acc, val) => acc + val, 0).toFixed(2);
};
