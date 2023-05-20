/* 
You are given an array. Complete the function that returns the number of ALL elements within an array, including any nested arrays.

Examples
[]                   -->  0
[1, 2, 3]            -->  3
["x", "y", ["z"]]    -->  4
[1, 2, [3, 4, [5]]]  -->  7
The input will always be an array.
*/

// MY SOLUTION
function deepCount(a) {
  let count = 0;
  for (let i of a) {
    if (Array.isArray(i)) {
      count++;
      count += deepCount(i);
    } else count++;
  }
  return count;
}

// SOLUTION OF OTHERS
function deepCount(a) {
  return a.reduce(
    (s, e) => s + (Array.isArray(e) ? deepCount(e) : 0),
    a.length
  );
}
