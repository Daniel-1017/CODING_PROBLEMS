/* 
Write a function that reverses the bits in an integer.

For example, the number 417 is 110100001 in binary. Reversing the binary is 100001011 which is 267.

You can assume that the number is not negative.
*/

// MY SOLUTION

// METHOD 1
const reverseBits = n => {
  if (n === 0) return 0;
  let bits = "";
  while (n > 0) {
    bits += n % 2;
    n = Math.floor(n / 2);
  }
  return Number.parseInt(bits, 2);
};

// METHOD 2
function reverseBits(n) {
  return Number.parseInt([...(n >>> 0).toString(2)].reverse().join``, 2);
}

// SOLUTION OF OTHERS
function reverseBits(n) {
  // toString(2) converts n into bits
  const binaryReverse = n.toString(2).split("").reverse().join("");
  return parseInt(binaryReverse, 2);
}
