/* 
Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.

isPalindrome('awesome') false
isPalindrome('foobar') false
isPalindrome('amanaplanacanalpanama') true
isPalindrome('amanaplanacanalpandemonium') false
*/

function isPalindrome(word) {
  if (word[0] !== word[word.length - 1] || word.length === 0) return false; // base case
  isPalindrome(word.slice(1, word.length - 1));
  return true;
}

isPalindrome("tacocat"); // true
