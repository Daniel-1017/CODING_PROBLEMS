/* 
The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.
*/

// MY SOLUTION
function solve(s) {
  const vowelChain = s.match(/[aeiou]+/gi);
  let longest = "";
  for (let chain of vowelChain)
    if (chain.length > longest.length) longest = chain;
  return longest.length;
}

// SOLUTION OF OTHERS
function solve(s) {
  return Math.max(...s.match(/[aeiou]+/g).map((x) => x.length));
}
