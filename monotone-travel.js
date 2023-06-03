/* 
Task
You're given a list of compareable elements:

heights = [h1, h2, h3, …, hn]
Your job is to check whether for any x all successors are greater or equal to x.

isMonotone([1,2,3]) == true
isMonotone([1,1,2]) == true
isMonotone([1])     == true
isMonotone([3,2,1]) == false
isMonotone([3,2,2]) == false
If the list is empty, Peter has probably removed your altimeter, so we cannot prove him wrong and he's still right:

isMonotone([])     == True
*/

// MY SOLUTION
const isMonotone = function (arr) {
  if (arr.length === 0) return true;
  for (let i = 0; i < arr.length; i++) {
    if (arr.slice(i + 1).some(n => n < arr[i])) return false;
  }
  return true;
};

// SOLUTION OF OTHERS
const isMonotone = function (arr) {
  return arr.every(function (x, idx) {
    return idx === 0 ? true : arr[idx] >= arr[idx - 1];
  });
};
