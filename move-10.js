/* 
Move every letter in the provided string forward 10 letters through the alphabet.

If it goes past 'z', start again at 'a'.

Input will be a string with length > 0.
*/

// MY SOLUTION
function moveTen(s) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return [...s].map(l => alphabet[(l.charCodeAt() - 87) % alphabet.length])
    .join``;
}

// SOLUTION OF OTHERS
const moveTen = s =>
  s.replace(/./g, val =>
    String.fromCharCode(97 + ((val.charCodeAt() - 87) % 26))
  );
