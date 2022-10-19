/* 
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:

sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false
*/

function sameFrequency(n1, n2) {
  const n1String = n1.toString();
  const n2String = n2.toString();
  let numbers = {};

  for (let i = 0; i < n1String.length; i++) {
    numbers[n1String[i]]
      ? (numbers[n1String[i]] += 1)
      : (numbers[n1String[i]] = 1);
  }

  for (let i = 0; i < n2String.length; i++) {
    if (!numbers[n2String[i]]) {
      return false;
    } else {
      numbers[n2String[i]] -= 1;
    }
  }

  return true;
}

sameFrequency(22, 222);
