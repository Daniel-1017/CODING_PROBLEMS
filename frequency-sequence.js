/* 
our task is to return an output string that translates an input string s by replacing each character in s with a number representing the number of times that character occurs in s and separating each number with the sep character(s).

Example (s, sep --> Output)

"hello world", "-" --> "1-1-3-3-2-1-1-2-1-3-1"
"19999999"   , ":" --> "1:7:7:7:7:7:7:7"
"^^^**$"     , "x" --> "3x3x3x2x2x1"
*/

// MY SOLUTION
function freqSeq(str, sep) {
  const hash = {};
  for (let i of str) hash[i] = (hash[i] || 0) + 1;
  return [...str].map(l => hash[l]).join(sep);
}

// SOLUTION OF OTHERS
function freqSeq(str, sep) {
  return str
    .split("")
    .map((v, i, arr) => arr.filter(vi => vi === v).length)
    .join(sep);
}
