/* 
Build Tower
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
*/

// MY SOLUTION
function towerBuilder(nFloors) {
  const tower = [];
  for (let i = 1, j = 1; i <= nFloors * 2; i += 2, j++) {
    const space = " ".repeat(Math.floor(nFloors - j));
    tower.push(space + "*".repeat(i) + space);
  }
  return tower;
}

// SOLUTION OF OTHERS
function towerBuilder(n) {
  return Array.from({ length: n }, function (v, k) {
    const spaces = " ".repeat(n - k - 1);
    return spaces + "*".repeat(k + k + 1) + spaces;
  });
}
