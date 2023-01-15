/* 
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
*/

// MY SOLUTION
function toCamelCase(str) {
  if (!str) return "";
  const firstIsUpperCase = str[0] === str[0].toUpperCase();
  let string = "";
  let idx = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "-" || str[i] === "_") {
      string += str.slice(idx, i) + " ";
      idx = i + 1;
    }
    if (i === str.length - 1) {
      string += str.slice(idx, str.length);
    }
  }

  const finalString = string
    .split(" ")
    .map((s) => s[0].toUpperCase() + s.slice(1, s.length))
    .join("");

  return firstIsUpperCase
    ? finalString
    : finalString[0].toLowerCase() + finalString.slice(1, finalString.length);
}

// SOLUTION OF OTHERS
function toCamelCase(str) {
  return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
}
