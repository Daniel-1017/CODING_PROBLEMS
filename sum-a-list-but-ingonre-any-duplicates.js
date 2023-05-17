/* 
Please write a function that sums a list, but ignores any duplicate items in the list.

For instance, for the list [3, 4, 3, 6] , the function should return 10.
*/

function sumNoDuplicates(numList) {
  let sum = 0;
  for (let i of numList) {
    if (numList.indexOf(i) === numList.lastIndexOf(i)) sum += i;
  }
  return sum;
}
