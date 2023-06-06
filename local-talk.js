/* 
In Bali, as far as I can gather, when ex-pats speak to locals, they basically insert the word 'Pak' as often as possible. I am assured it means something like 'mate' or 'sir' but that could be completely wrong.

Anyway, as some basic language education(??) this kata requires you to turn any sentence provided (s) into ex-pat balinese waffle by inserting the word 'pak' between every other word. Simple 8kyu :D

Pak should not be the first or last word. Strings of just spaces should return an empty string.
*/

function pak(s) {
  if (!s.match(/[a-zA-Z]/gi)) return "";
  const arr = s.split(" ");
  for (let i = 1; i < arr.length; i++) {
    if (i % 2 === 1) arr.splice(i, 0, "pak");
  }
  return arr.join` `;
}

// SOLUTION OF OTHERS
const pak = s => s.trim().split(` `).join(` pak `);
