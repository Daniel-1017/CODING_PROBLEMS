/* 
Compare two strings by comparing the sum of their values (ASCII character code).

For comparing treat all letters as UpperCase
null/NULL/Nil/None should be treated as empty strings
If the string contains other characters than letters, treat the whole string as it would be empty
Your method should return true, if the strings are equal and false if they are not equal.

Examples:
"AD", "BC"  -> equal
"AD", "DD"  -> not equal
"gf", "FG"  -> equal
"zz1", ""   -> equal (both are considered empty)
"ZzZz", "ffPFF" -> equal
"kl", "lz"  -> not equal
null, ""    -> equal
*/

function compare(s1, s2) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  if (s1 === null) s1 = "";
  if (s2 === null) s2 = "";
  for (let i of s1) if (!alphabet.includes(i.toLowerCase())) s1 = "";
  for (let i of s2) if (!alphabet.includes(i.toLowerCase())) s2 = "";

  const s1Total = [...s1].reduce(
    (acc, curr) => acc + curr.toUpperCase().charCodeAt(),
    0
  );
  const s2Total = [...s2].reduce(
    (acc, curr) => acc + curr.toUpperCase().charCodeAt(),
    0
  );

  return s1Total === s2Total;
}
