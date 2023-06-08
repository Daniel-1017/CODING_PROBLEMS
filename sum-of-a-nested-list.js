/* 
Implement a function to calculate the sum of the numerical values in a nested list. For example :

sumNested([1, [2, [3, [4]]]]) => 10
*/

const sumNested = arr => {
  let total = 0;
  for (let val of arr) {
    if (Array.isArray(val)) total += sumNested(val);
    else total += val;
  }
  return total;
};
