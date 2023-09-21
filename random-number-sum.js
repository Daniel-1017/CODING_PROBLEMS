/* 
Write a function that takes a positive integer n as input and returns the sum of n random numbers between 1 and 10 (inclusive).
*/

function getRandomNumberSum(n) {
  if (n <= 0) {
    throw new Error("Input should be a positive integer greater than 0.");
  }

  let sum = 0;
  for (let i = 0; i < n; i++) {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    sum += randomNumber;
  }

  return sum;
}
