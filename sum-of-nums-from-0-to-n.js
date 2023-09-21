/* 
Calculate sum of number from 0 to n.

Example:
Input:

> 6
Output:

0+1+2+3+4+5+6 = 21

Input:

> -15
*/

function SequenceSum(count) {
  return count <= 0 ? 0 : (count * (count + 1)) / 2;
}
