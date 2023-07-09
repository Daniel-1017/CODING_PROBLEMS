/* 
Create a function that takes a string as a parameter and does the following, in this order:

1. Replaces every letter with the letter following it in the alphabet (see note below)
2. Makes any vowels capital
3. Makes any consonants lower case

Note:
- the alphabet should wrap around, so Z becomes A
- in this kata, y isn't considered as a vowel.

So, for example the string "Cat30" would return "dbU30" (Cat30 --> Dbu30 --> dbU30)
*/

const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function changer(str) {
  let result = "";
  for (let char of str) {
    if (!isNaN(char)) result += char;
    else {
      const indexOfChar = alphabet.indexOf(char.toLowerCase());
      const nextChar = alphabet[(indexOfChar + 1) % 26];

      if (/[aeiou]/g.test(nextChar)) result += nextChar.toUpperCase();
      else result += nextChar.toLowerCase();
    }
  }
  return result;
}
