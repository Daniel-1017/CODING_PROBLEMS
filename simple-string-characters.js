/* 
In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
--the order is: uppercase letters, lowercase, numbers and special characters.
More examples in the test cases.

Good luck!
*/

function solve(s) {
  const numbers = s.match(/[0-9]/g) ? s.match(/[0-9]/g).join``.length : 0;
  const lwcLetters = s.match(/[a-z]/g) ? s.match(/[a-z]/g).join``.length : 0;
  const upcLetters = s.match(/[A-Z]/g) ? s.match(/[A-Z]/g).join``.length : 0;
  const specialChars = s.match(/[^a-zA-Z0-9]/g)
    ? s.match(/[^a-zA-Z0-9]/g).join``.length
    : 0;
  return [upcLetters, lwcLetters, numbers, specialChars];
}
