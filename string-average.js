/* 
You are given a string of numbers between 0-9. Find the average of these numbers and return it as a floored whole number (ie: no decimal places) written out as a string. Eg:

"zero nine five two" -> "four"

If the string is empty or includes a number greater than 9, return "n/a"
*/

function averageString(str) {
  str = str.split(" ");
  const numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  if (!str.length) return "n/a";
  let sum = 0;
  for (var i = 0; i < str.length; i++) {
    const n = str[i];
    if (numbers.indexOf(n) === -1) return "n/a";
    sum += numbers.indexOf(n);
  }
  return numbers[Math.floor(sum / i)];
}
