/* 
Move every letter in the provided string forward 10 letters through the alphabet.

If it goes past 'z', start again at 'a'.

Input will be a string with length > 0.
*/

function moveTen(s) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return [...s].map(l => alphabet[(l.charCodeAt() - 87) % alphabet.length])
    .join``;
}
