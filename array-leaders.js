/* 
Definition
An element is leader if it is greater than The Sum all the elements to its right side.

Task
Given an array/list [] of integers , Find all the LEADERS in the array.

Notes
Array/list size is at least 3.
Array/list's numbers Will be mixture of positives , negatives and zeros
Repetition of numbers in the array/list could occur.
Returned Array/list should store the leading numbers in the same order in the original array/list .

Input >> Output Examples
arrayLeaders ({1, 2, 3, 4, 0}) ==> return {4}
*/

function arrayLeaders(numbers) {
  const leaders = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > numbers.slice(i + 1).reduce((acc, curr) => acc + curr, 0))
      leaders.push(numbers[i]);
  }
  return leaders;
}
console.log(arrayLeaders([16, 17, 4, 3, 5, 2]));
