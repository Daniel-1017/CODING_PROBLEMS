/* 
In this kata, your job is to return the two distinct highest values in a list. If there're less than 2 unique values, return as many of them, as possible.

The result should also be ordered from highest to lowest.

Examples:

[4, 10, 10, 9]  =>  [10, 9]
[1, 1, 1]  =>  [1]
[]  =>  []
*/

// MY SOLUTION
function twoHighest(arr) {
  if (arr.length === 0) return []
  let firstMax = Math.max(...arr),
    secondMax
  const filteredArr = arr.filter(n => n !== firstMax)
  secondMax = Math.max(...filteredArr)
  return filteredArr.length === 0 ? [firstMax] : [firstMax, secondMax]
}

// SOLUTION OF OTHERS
function twoHighest(arr) {
  return [...new Set(arr)].sort((a, b) => b - a).slice(0, 2)
}
