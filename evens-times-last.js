/* 
Given a sequence of integers, return the sum of all the integers that have an even index (odd index in COBOL), multiplied by the integer at the last index.

Indices in sequence start from 0.

If the sequence is empty, you should return 0.
*/

// MY SOLUTION
function evenLast(numbers) {
  return !numbers.length
    ? 0
    : numbers.reduce(
        (acc, curr, idx) => acc + (!(idx % 2) ? curr * numbers.at(-1) : 0),
        0
      );
}

// SOLUTION OF OTHERS
const evenLast = n =>
  n.reduce((p, c, i) => (i % 2 ? p : p + c), 0) * n[n.length - 1] || 0;
