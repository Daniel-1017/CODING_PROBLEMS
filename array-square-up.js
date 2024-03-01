/* 
This is a question from codingbat

Given an integer n greater than or equal to 0, create and return an array with the following pattern:

squareUp(3) => [0, 0, 1, 0, 2, 1, 3, 2, 1]
squareUp(2) => [0, 1, 2, 1]
squareUp(4) => [0, 0, 0, 1, 0, 0, 2, 1, 0, 3, 2, 1, 4, 3, 2, 1]
n<=1000.
*/

function squareUp(n) {
  const arr = Array.from({ length: n }, (_, i) => i)
  const result = []
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push([i ? new Array(i).fill(0) : n, ...arr.slice(1, arr.length - i + 1).reverse()])
  }
  return result.flat(2)
}