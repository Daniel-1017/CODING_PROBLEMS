/* 
An array is called zero-balanced if its elements sum to 0 and for each positive element n, there exists another element that is the negative of n. Write a function named ìsZeroBalanced that returns true if its argument is zero-balanced array, else return false. Note that an empty array will not sum to zero.
*/

function ìsZeroBalanced(n) {
  if (!n.length) return false;
  const sum = n.reduce((acc, val) => acc + val, 0);
  for (let num of n) {
    if (n.indexOf(num * -1) === -1) return false;
  }
  return sum === 0;
}
