/* 
Given 2 string parameters, show a concatenation of:

the reverse of the 2nd string with inverted case; e.g Fish -> HSIf
a separator in between both strings: @@@
the 1st string reversed with inverted case and then mirrored; e.g Water -> RETAwwATER 
** Keep in mind that this kata was initially designed for Shell, I'm aware it may be easier in other languages.**
*/

function reverseAndInvertCase(str) {
  return str
    .split('')
    .reverse()
    .map((letter) => {
      if (letter === letter.toUpperCase()) {
        return letter.toLowerCase();
      } else {
        return letter.toUpperCase();
      }
    }).join``;
}

function mirrorString(str) {
  return str.split('').reverse().join``;
}

function reverseAndMirror(s1, s2) {
  return `${reverseAndInvertCase(s2)}@@@${reverseAndInvertCase(
    s1
  )}${mirrorString(reverseAndInvertCase(s1))}`;
}
