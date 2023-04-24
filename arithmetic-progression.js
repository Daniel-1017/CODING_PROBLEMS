/* 
In your class, you have started lessons about arithmetic progression. Since you are also a programmer, you have decided to write a function that will return the first n elements of the sequence with the given common difference d and first element a. Note that the difference may be zero!

The result should be a string of numbers, separated by comma and space.

Example
# first element: 1, difference: 2, how many: 5
arithmetic_sequence_elements(1, 2, 5) == "1, 3, 5, 7, 9"
*/

// MY SOLUTION
function arithmeticSequenceElements(a, d, n) {
  const arr = [];
  let i = 1;
  while (i !== n + 1) {
    arr.push(a);
    a += d;
    i++;
  }
  return arr.join(", ");
}

// SOLUTION OF OTHERS
function arithmeticSequenceElements(a, r, n) {
  var ret = [a];
  while (--n) ret.push((a += r));
  return ret.join(", ");
}
