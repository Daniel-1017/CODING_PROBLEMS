/* 
The Ones' Complement of a binary number is the number obtained by swapping all the 0s for 1s and all the 1s for 0s. For example:

onesComplement(1001) = 0110
onesComplement(1001) = 0110
For any given binary number,formatted as a string, return the Ones' Complement of that number.
*/

function onesComplement(n) {
  let result = "";
  for (let bit of n) {
    if (bit === "0") result += 1;
    else result += 0;
  }
  return result;
}
