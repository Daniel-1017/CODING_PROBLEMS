/* 
Your task in this kata is to implement a function that calculates the sum of the integers inside a string. For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635.

Note: only positive integers will be tested.
*/

function sumOfIntegersInString(s) {
  if (!s.match(/[0-9]+/g)) return 0;
  return s.match(/[0-9]+/g).reduce((acc, val) => acc + +val, 0);
}
