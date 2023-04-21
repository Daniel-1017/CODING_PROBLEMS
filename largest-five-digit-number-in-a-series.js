/* 
In the following 6 digit number:

283910
91 is the greatest sequence of 2 consecutive digits.

In the following 10 digit number:

1234567890
67890 is the greatest sequence of 5 consecutive digits.

Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits.
*/

// MY SOLUTION

// WHILE
function solution(digits) {
  let biggest5digit = 0,
    i = 0;
  while (i < digits.length - 4) {
    const curr5digit = +digits.slice(i, i + 5);
    if (curr5digit > biggest5digit) biggest5digit = curr5digit;
  }
  return biggest5digit;
}

// FOR
function solution(digits) {
  const fiveDigits = [];
  for (let i = 0; i < digits.length - 4; i++)
    fiveDigits.push(+digits.slice(i, i + 5));
  return Math.max(...fiveDigits);
}

// SOLUTION OF OTHERS
function solution(digits) {
  let answer = 0;

  for (let i = 0; i < digits.length; i++) {
    let number = digits.substr(i, 5);
    if (Number(number) > answer) {
      answer = Number(number);
    }
  }
  return answer;
}
