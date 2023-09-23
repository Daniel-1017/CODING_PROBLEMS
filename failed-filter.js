/* 
Failed Filter - Bug Fixing #3
Oh no, Timmy's filter doesn't seem to be working? Your task is to fix the FilterNumber function to remove all the numbers from the string.
*/

// MY SOLUTION
const FilterNumbers = function (str) {
  return str.match(/[a-z]/gi).join``;
};

// SOLUTION OF OTHERS
const FilterNumbers = function (str) {
  return str
    .split("")
    .filter(c => isNaN(c))
    .join("");
};
