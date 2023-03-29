/* 
Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.
*/

// MY SOLUTION
function cubeOdd(arr) {
  const odds = [];
  for (let i of arr) {
    if (typeof i !== "number") return undefined;
    const cubed = i ** 3;
    if (cubed % 2 === 1 || cubed % 2 === -1) odds.push(cubed);
  }
  return odds.reduce((acc, curr) => acc + curr, 0);
}

// SOLUTION OF OTHERS
function cubeOdd(a) {
  const isNumeric = a.every(x => !isNaN(x));
  return isNumeric
    ? a.filter(n => n % 2).reduce((s, n) => s + n * n * n, 0)
    : undefined;
}
