/* 
Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.

Example:
For input: [3, 4, 4, 3, 6, 3]

remove the 3 at index 0
remove the 4 at index 1
remove the 3 at index 3
Expected output: [4, 6, 3]

More examples can be found in the test cases.

Good luck!
*/

// MY SOLUTION
function solve(arr) {
  const finalArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    if (!finalArr.includes(arr[i])) finalArr.unshift(arr[i]);
  }
  return finalArr;
}

// SOLUTION OF OTHERS
function solve(arr) {
  return arr.filter((val, i) => arr.lastIndexOf(val) == i);
}

function solve(arr) {
  return [...new Set(arr.reverse())].reverse();
}
