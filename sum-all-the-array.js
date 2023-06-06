/* 
You are given an array of values.

Sum every number value in the array, and any nested arrays (to any depth).

Ignore all other types of values.
*/

// MY SOLUTION
function arraySum(arr) {
  let total = 0;
  for (let i of arr) {
    if (Array.isArray(i)) total += arraySum(i);
    else if (typeof i === "number") total += i;
  }
  return total;
}

// SOLUTION OF OTHERS
function arraySum(arr) {
  return arr.reduce(
    (n, x) => n + (Array.isArray(x) ? arraySum(x) : isNaN(x) ? 0 : x),
    0
  );
}
