/* 
Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).

Consult the solution set-up for the exact data structure implementation depending on your language.

Example:

orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
*/

const orderedCount = function (text) {
  const result = [];
  for (let i of text) {
    const existing = result.find((a) => a[0] === i);
    if (existing) existing[1]++;
    else result.push([i, 1]);
  }
  return result;
};
