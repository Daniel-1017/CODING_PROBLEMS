/* 
Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56
*/

function getNumberFromString(s) {
  let n = "";
  for (let i of s) {
    !isNaN(parseInt(i)) ? (n += i) : null;
  }
  return +n;
}

getNumberFromString("hell5o wor6ld");
