/* 
Find the difference between the sum of the squares of the first n natural numbers (1 <= n <= 100) and the square of their sum.

Example
For example, when n = 10:

The square of the sum of the numbers is:

(1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10)2 = 552 = 3025

The sum of the squares of the numbers is:

1 ** 2 + 2 ** 2 + 3 ** 2 + 4 ** 2 + 5 ** 2 + 6 ** 2 + 7 ** 2 + 8 ** 2 + 9 ** 2 + 10 ** 2 = 385

Hence the difference between square of the sum of the first ten natural numbers and the sum of the squares of those numbes is: 3025 - 385 = 2640
*/

// MY SOLUTION
function differenceOfSquares(n) {
  let squareOfTheSum = 0,
    sumOfTheSquares = 0;
  for (let i = 1; i <= n; i++) {
    squareOfTheSum += i;
    sumOfTheSquares += i ** 2;
  }
  squareOfTheSum = squareOfTheSum ** 2;
  return squareOfTheSum - sumOfTheSquares;
}

// SOLUTION OF OTHERS
function differenceOfSquares(n) {
  return (
    Math.pow((n * (n + 1)) / 2, 2) - Math.round((n / 6) * (n + 1) * (2 * n + 1))
  );
}

// FORMULA TO FIND OUT THE SUM OF THE SQUARES OF A NUMBER
Math.round((n / 6) * (n + 1) * (2 * n + 1));
