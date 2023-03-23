/* 
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false
*/

// MY SOLUTION
function isIsogram(str) {
  const letters = [];
  for (let i of str.toLowerCase()) {
    if (letters.includes(i)) return false;
    letters.push(i);
  }
  return true;
}

// SOLUTION OF OTHERS
function isIsogram(str) {
  return new Set(str.toUpperCase()).size == str.length;
}

function isIsogram(str) {
  return !str.match(/([a-z]).*\1/i);
}
