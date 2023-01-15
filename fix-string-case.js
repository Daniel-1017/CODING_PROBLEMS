/*
In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

make as few changes as possible.
if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.

For example:
solve("coDe") = "code"
solve("CODe") = "CODE"
*/

// MY SOLUTION
function solve(s) {
  let upper = 0;
  let lower = 0;
  for (let char of s) {
    if (char.toUpperCase() === char) {
      upper++;
    } else lower++;
  }
  return upper <= lower ? s.toLowerCase() : s.toUpperCase();
}

// SOLUTION OF OTHERS
const solve = (s) =>
  s.replace(/[A-Z]/g, "").length < s.length / 2
    ? s.toUpperCase()
    : s.toLowerCase();
