/* 
Given a string, remove any characters that are unique from the string.

Example:

input: "abccdefee"

output: "cceee"
*/

// MY SOLUTION
function onlyDuplicates([...str]) {
  let unique = "";
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) unique += str[i];
  }
  return str.filter((v) => !unique.includes(v)).join``;
}

// SOLUTION OF OTHERS
function onlyDuplicates(str) {
  return str
    .split("")
    .filter((e) => str.indexOf(e) != str.lastIndexOf(e))
    .join("");
}
