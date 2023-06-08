/* 
No Story

No Description

Only by Thinking and Testing

Look at result of testcase, guess the code!
*/

// MY SOLUTION
function testit(s) {
  return !s.length
    ? ""
    : s
        .split(" ")
        .map(word => word.slice(0, -1) + word[word.length - 1].toUpperCase())
        .join` `;
}

// SOLUTION OF OTHERS
const testit = s => s.replace(/.\b/g, c => c.toUpperCase());
