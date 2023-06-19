/* 
The magic sum of 3s is calculated on an array by summing up odd numbers which include the digit 3. Write a function magic_sum which accepts an array of integers and returns the sum.

Example: [3, 12, 5, 8, 30, 13] results in 16 (3 + 13)

If the sum cannot be calculated, 0 should be returned.


*/

function magicSum(numbers) {
  let sum = 0;
  for (let n of numbers) {
    if (n % 2 === 1 && n.toString().includes("3")) sum += n;
  }
  return sum;
}
