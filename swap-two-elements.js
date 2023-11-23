/* 
Return a new array that contains exactly the same elements as the input array, but with elements a and b swapped.

If the array has multiple copies of a, swap only the first one that appears in the array.
If the array has multiple copies of b, swap only the last one that appears in the array.
For example:

([1, 2, 3, 4], 2, 4) -> [1, 4, 3, 2]
([1, 2, 3, 4, 1, 2, 3, 4], 2, 4) -> [1, 4, 3, 4, 1, 2, 3, 2]
*/

function swapTwo(array, a, b) {
  const firstAIdx = array.indexOf(a);
  const lastBIdx = array.lastIndexOf(b);

  const temp = array[firstAIdx];
  array[firstAIdx] = array[lastBIdx];
  array[lastBIdx] = temp;

  return [...array];
}
