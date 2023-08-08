/* 
Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.

Examples
 123 ->  321
-456 -> -654
1000 ->    1
*/

// MY SOLUTION
function reverseNumber(n) {
  const negative = n.toString()[0] === "-";
  if (negative) {
    return [...n.toString().slice(1)].reverse().join`` * -1;
  } else {
    return Number.parseInt([...n.toString()].reverse().join``);
  }
}

// SOLUTION OF OTHERS
function reverseNumber(n) {
  let isNegative = n < 0;
  let reverseAsString = Math.abs(n).toString().split("").reverse().join("");
  let result = Number(reverseAsString);

  return isNegative ? -result : result;
}
