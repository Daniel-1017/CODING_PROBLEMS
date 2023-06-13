/* 
Longest Palindrome
Find the length of the longest substring in the given string s that is the same in reverse.

As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.

If the length of the input string is 0, the return value must be 0.

Example:
"a" -> 1 
"aab" -> 2  
"abcde" -> 1
"zzbaabcd" -> 4
"" -> 0
*/

// MY SOLUTION
const longestPalindrome = function (s) {
  let maxPalindromeLen = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j <= s.length; j++) {
      const str = s.slice(i, j);
      if ([...str].reverse().join`` === str && str.length > maxPalindromeLen)
        maxPalindromeLen = str.length;
    }
  }
  return maxPalindromeLen;
};

// SOLUTION OF OTHERS
function longestPalindrome(s) {
  if (!s) return 0;
  for (let c = s.length; c > 0; c--) {
    for (let i = 0; i <= s.length - c; i++) {
      var check = s.substr(i, c);
      if (check === check.split("").reverse().join("")) return c;
    }
  }
}
