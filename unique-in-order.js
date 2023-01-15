/* 
mplement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/

// MY SOLUTION
function uniqueInOrder(iterable) {
  if (!iterable.length) return [];
  let currLetter = iterable[0];
  let arr = [iterable[0]];
  for (let i of iterable) {
    if (i !== currLetter) {
      arr.push(i);
      currLetter = i;
    }
  }
  return arr;
}

// SOLUTION OF OTHERS
function uniqueInOrder(iterable) {
  return [...iterable].filter((a, i) => a !== iterable[i - 1]);
}
