/* 
Write a program to determine if a string contains only unique characters. Return true if it does and false otherwise.

The string may contain any of the 128 ASCII characters. Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.
*/

// MY SOLUTION
function hasUniqueChars(str) {
  const unique = [...new Set([...str])].join("");
  return unique === str ? true : false;
}

function hasUniqueChar(str) {
  return new Set(str).size === str.length;
}
