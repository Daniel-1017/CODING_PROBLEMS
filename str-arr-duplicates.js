/* 
In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

For example:

dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

dup(["kelless","keenness"]) = ["keles","kenes"].

Strings will be lowercase only, no spaces. See test cases for more examples.
*/

// MY SOLUTION
function dup(s) {
  return s.map(word => delete_consecutive_strings(word));
}

function delete_consecutive_strings(s) {
  // Initialize Start and Stop Pointers.
  let i = 0;
  let j = 0;

  // Initialize an empty string for new elements.
  let new_elements = "";

  // Iterate String Using j pointer.
  while (j < s.length) {
    // If both elements are same then skip.
    if (s[i] == s[j]) {
      j++;
      // If both elements are not same then append new element.
    } else if (s[j] != s[i] || j == s.length - 1) {
      new_elements += s[i];
      // After appending sliding over the window.
      i = j;
      j++;
    }
  }
  // Append the last string.
  new_elements += s[j - 1];
  return new_elements;
}

// SOLUTION OF OTHERS
function dup(s) {
  return s.map(w => {
    return w
      .split("")
      .filter((c, i, arr) => {
        return c !== arr[i - 1];
      })
      .join("");
  });
}
