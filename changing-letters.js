/* 
When provided with a String, capitalize all vowels

For example:

Input : "Hello World!"

Output : "HEllO WOrld!"

Note: Y is not a vowel in this kata.
*/

// MY SOLUTION
function swap([...string]) {
  return string.map(l => ("aeiou".includes(l) ? l.toUpperCase() : l)).join``;
}

// SOLUTION OF OTHERS
function swap(st) {
  return st.replace(/[aeiou]/g, v => v.toUpperCase());
}
