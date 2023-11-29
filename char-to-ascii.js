/* 
Take a string and return a hash with all the ascii values of the characters in the string. Returns nil if the string is empty. The key is the character, and the value is the ascii value of the character. Repeated characters are to be ignored and non-alphabetic characters as well.
*/

function charToAscii(string) {
  const hash = {};

  for (const char of string) {
    if (!hash[char] && /[a-z]/gi.test(char)) hash[char] = char.charCodeAt();
  }

  return !string ? null : hash;
}
