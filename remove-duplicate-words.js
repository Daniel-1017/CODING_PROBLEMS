/* 
Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

Example:

Input:
'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

Output:
'alpha beta gamma delta'
*/

// MY SOLUTION
function removeDuplicateWords(s) {
  const obj = {};
  for (let i of s.split(" ")) {
    if (!obj[i]) obj[i] = i;
  }
  return Object.values(obj).join(" ");
}

// SOLUTION OF OTHERS
const removeDuplicateWords = s => {
  const set = new Set(s.split(" "));
  return Array.from(set).join(" ");
};

function removeDuplicateWords(s) {
  return [...new Set(s.split(" "))].join(" ");
}
