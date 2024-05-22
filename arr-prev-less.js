/* 
Task
Given array of integers, for each position i, search among the previous positions for the last (from the left) position that contains a smaller value. Store this value at position i in the answer. If no such value can be found, store -1 instead.

Example
For items = [3, 5, 2, 4, 5], the output should be [-1, 3, -1, 2, 4].

Input/Output
[input] integer array arr

Non-empty array of positive integers.

Constraints: 3 ≤ arr.length ≤ 1000, 1 ≤ arr[i] ≤ 1000.

[output] an integer array

Array containing answer values computed as described above.
*/

// MY SOLUTION
const arrayPreviousLess = arr => {
  const answer = [-1];
  for (let i = 1; i < arr.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] < arr[i]) {
        answer[i] = arr[j];
        break;
      }
    }
    if (!answer[i]) answer[i] = -1;
  }
  return answer;
};

// SOLUTION OF OTHERS
const arrayPreviousLess = arr =>
  arr.map(
    (val, idx) =>
      arr
        .slice(0, idx)
        .reverse()
        .find(v => v < val) || -1
  );
