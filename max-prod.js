/* 
Task
Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

Notes
Array/list size is at least 2.

Input >> Output Examples
adjacentElementsProduct([1, 2, 3]); ==> return 6
*/

function adjacentElementsProduct(array) {
  let maxProd = 0;
  for (let i = 0; i < array.length; i++) {
    const prod = array[i] * array[i + 1];
    if (prod > maxProd) maxProd = prod;
  }
  return maxProd;
}
