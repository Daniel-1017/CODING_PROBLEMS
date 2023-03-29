/* 
Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

Return as a number.
*/

// MY SOLUTION
function divCon(x) {
  let numSum = 0,
    strSum = 0;
  for (let i of x) {
    if (typeof i === "string") {
      strSum += Number.parseInt(i);
    } else {
      numSum += i;
    }
  }
  return numSum - strSum;
}

// SOLUTION OF OTHERS
function divCon(x) {
  return x.reduce(
    (acc, cur) => (typeof cur === "number" ? acc + cur : acc - Number(cur)),
    0
  );
}
