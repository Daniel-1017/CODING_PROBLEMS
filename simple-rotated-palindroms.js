/* 
In this Kata, you will be given a string and your task is to determine if that string can be a palindrome if we rotate one or more characters to the left.

solve("4455") = true, because after 1 rotation, we get "5445" which is a palindrome
solve("zazcbaabc") = true, because after 3 rotations, we get "abczazcba", a palindrome
More examples in test cases. Input will be strings of lowercase letters or numbers only.
*/

const solve = (string) => {
  const isPalindrome = (string) => [...string].reverse().join`` === string;

  for (let i = 1; i < string.length; i++) {
    const testString = [...string.concat(string)].splice(i, string.length)
      .join``;
    if (isPalindrome(testString)) return true;
  }

  return false;
};
