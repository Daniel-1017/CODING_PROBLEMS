/* 
Easy; Make a box
Given a number as a parameter (between 2 and 30), return an array containing strings which form a box.
Like this:

n = 5

[
  '-----',
  '-   -',
  '-   -',
  '-   -',
  '-----'
]
n = 3

[
  '---',
  '- -',
  '---'
]
*/

const box = n => {
  return Array.from({ length: n }, (_, i) => {
    if (i === 0 || i === n - 1) return "-".repeat(n);
    return "-" + " ".repeat(n - 2) + "-";
  });
};
