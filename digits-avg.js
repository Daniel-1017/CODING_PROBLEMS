/* 
Given an integer, take the (mean) average of each pair of consecutive digits. Repeat this process until you have a single integer, then return that integer. e.g.

Note: if the average of two digits is not an integer, round the result up (e.g. the average of 8 and 9 will be 9)
*/

function digitsAverage(input) {
  if (input <= 9) return input;
  let avg = "";
  const inputString = input.toString();
  for (let i = 0; i < inputString.length - 1; i++) {
    avg += Math.round((+inputString[i] + +inputString[i + 1]) / 2);
  }
  if (avg.length > 1) return digitsAverage(+avg);
  else return +avg;
}
