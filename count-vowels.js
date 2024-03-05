/* Write a function countVowels that takes a string as input and returns the count of vowels (a, e, i, o, u) in the given string. The function should be case-insensitive.

Input:

A string of length 
1
≤
length of string
≤
1000
1≤length of string≤1000
Output:

An integer representing the count of vowels in the string.
g
Example:
countVowels("Hello, World!")  # Output: 3 (e, o, o are vowels)
countVowels("Programming is fun")  # Output: 5 (o, a, i, i, u are vowels)
countVowels("GPT-3")  # Output: 0 (no vowels in "GPT-3") */


function countVowels(s) {
  s = s.toLowerCase();
  const vowelCount = Array.from(s).filter(char => "aeiou".includes(char)).length;
  return vowelCount;
}