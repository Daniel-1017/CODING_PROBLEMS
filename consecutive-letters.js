/* 
In this Kata, we will check if a string contains consecutive letters as they appear in the English alphabet and if each letter occurs only once.

Rules are: (1) the letters are adjacent in the English alphabet, and (2) each letter occurs only once.

For example: 
solve("abc") = True, because it contains a,b,c
solve("abd") = False, because a, b, d are not consecutive/adjacent in the alphabet, and c is missing.
solve("dabc") = True, because it contains a, b, c, d
solve("abbc") = False, because b does not occur once.
solve("v") = True
All inputs will be lowercase letters.

More examples in test cases. Good luck!
*/

// MY SOLUTION
function solve(s) {
  if ([...new Set(s)].join`` !== s) return false;
  s = [...s].sort();
  for (let i = 0; i < s.length - 1; i++) {
    if (Math.abs(s[i].charCodeAt() - 97 - (s[i + 1].charCodeAt() - 97)) !== 1)
      return false;
  }
  return true;
}

// SOLUTION OF OTHERS
function solve(s) {
  return "abcdefghijklmnopqrstuvwxyz".includes([...s].sort().join(""));
}
