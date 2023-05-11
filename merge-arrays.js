/* 
Write a function that combines two arrays by alternatingly taking elements from each array in turn.

Examples:

[a, b, c, d, e], [1, 2, 3, 4, 5] becomes  [a, 1, b, 2, c, 3, d, 4, e, 5]

[1, 2, 3], [a, b, c, d, e, f] becomes [1, a, 2, b, 3, c, d, e, f]
Points:

The arrays may be of different lengths, with at least one character/digit.
One array will be of string characters (in lower case, a-z), a second of integers (all positive starting at 1).
*/

// MY SOLUTION
function mergeArrays(a, b) {
  const length = Math.max(a.length, b.length),
    finalArray = [];
  for (let i = 0; i < length; i++) {
    if (!a[i]) finalArray.push(b[i]);
    else if (!b[i]) finalArray.push(a[i]);
    else finalArray.push(a[i], b[i]);
  }
  return finalArray;
}

// SOLUTION OF OTHERS
function mergeArrays(a, b) {
  const answer = [];

  for (i = 0; i < Math.max(a.length, b.length); i++) {
    if (i < a.length) {
      answer.push(a[i]);
    }
    if (i < b.length) {
      answer.push(b[i]);
    }
  }

  return answer;
}
