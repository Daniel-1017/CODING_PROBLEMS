/* 
Rick wants a faster way to get the product of the largest pair in an array. Your task is to create a performant solution to find the product of the largest two integers in a unique array of positive numbers.
All inputs will be valid.
Passing [2, 6, 3] should return 18, the product of [6, 3].

Disclaimer: only accepts solutions that are faster than his, which has a running time O(nlogn).

maxProduct([2, 1, 5, 0, 4, 3])              // 20
maxProduct([7, 8, 9])                       // 72
maxProduct([33, 231, 454, 11, 9, 99, 57])   // 104874
*/

// MY SOLUTION
function maxProduct(a) {
  let max = 0,
    max2 = 0;
  for (let n of a) {
    if (n > max) {
      max2 = max;
      max = n;
    } else if (n > max2) max2 = n;
  }
  return max * max2;
}

// SOLUTION OF OTHERS
function maxProduct(a) {
  const biggest = Math.max.apply(Math, a);
  a.splice(a.indexOf(biggest), 1);
  return biggest * Math.max.apply(Math, a);
}
