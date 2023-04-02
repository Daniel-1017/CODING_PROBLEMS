/* 
Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.
*/

// MY SOLUTION
function expandedForm(num) {
  const strNum = String(num),
    finalArr = [];
  let x = 1;
  for (let i = 1; i <= strNum.length; i++) {
    const n = String(Number.parseInt(strNum[strNum.length - i]) * x);
    if (n !== "0") finalArr.unshift(n);
    x *= 10;
  }

  return finalArr.join(" + ");
}

// SOLUTION OF OTHERS
function expandedForm(num) {
  if (num < 10) return `${num}`;
  let over = num % Math.pow(10, num.toString().length - 1);
  if (!over) return `${num}`;
  return `${num - over} + ${expandedForm(over)}`;
}

const expandedForm = n =>
  n
    .toString()
    .split("")
    .reverse()
    .map((a, i) => a * Math.pow(10, i))
    .filter(a => a > 0)
    .reverse()
    .join(" + ");
