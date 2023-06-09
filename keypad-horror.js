/* 
Solve the horror of unstandardized keypads by providing a function that converts computer input to a number as if it was typed on a phone.

Example:
"789" -> "123"

Notes:
You get a string with numbers only
*/

function computerToPhone(numbers) {
  return numbers.split("").map(n => {
    if (n == 0) return 0;
    if (n > 6) return n - 6;
    if (n < 4) return +n + 6;
    return n;
  }).join``;
}
