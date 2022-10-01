/* 
Given an integer n and two other values, build an array of size n filled with these two values alternating.

Examples
5, true, false     -->  [true, false, true, false, true]
10, "blue", "red"  -->  ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
0, "one", "two"    -->  []
*/

// my solution
function alternate(n, firstValue, secondValue) {
  let arr = [];
  for (let i = n - 1; i >= 0; i--) {
    if (i % 2 === 0) {
      arr[i] = firstValue;
    } else {
      arr[i] = secondValue;
    }
  }

  return arr;
}

alternate(5, true, false); // [true, false, true, false, true]

// solution of others
const alternate = (n, a, b) => (n ? [a, ...alternate(n - 1, b, a)] : []);
