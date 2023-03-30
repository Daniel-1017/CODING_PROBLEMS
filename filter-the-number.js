/* 
Filter the number
Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?

Task
Your task is to return a number from a string.

Details
You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.
*/

// MY SOLUTION
const filterString = function (value) {
  const numbers = "0123456789";
  return +[...value].filter(v => numbers.includes(v)).join``;
};

// SOLUTION OF OTHERS
const FilterString = function (value) {
  return parseInt(value.replace(/[^\d]/g, ""));
};

const FilterString2 = function (value) {
  return +value
    .split("")
    .filter(n => !isNaN(n))
    .join("");
};
