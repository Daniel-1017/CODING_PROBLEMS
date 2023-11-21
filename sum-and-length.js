/* 
Sum and Length
In this kata you must return a string value, where the first part is the sum of positive numbers and the second part is the number of negative numbers.
Knowing that the first '0' is negative, the second is positive, the third is negative, and so on...


For example :
sumLength([-1,2,3,4,0,1,0,-2,0,-3])
return '10 5' (10 = 1 + 2 + 3 + 4 and 5 = 3 + 2 => 3 negatives numbers + second 0 as negative)
*/

const sumLength = arr => {
  const sum = arr.reduce((acc, n) => (n > 0 ? acc + n : acc), 0);
  let negativeNumbers = 0,
    zeroStatus = 'negative';

  for (let n of arr) {
    if (n === 0 && zeroStatus === 'negative') {
      negativeNumbers++;
      zeroStatus = 'positive';
    } else {
      if (n < 0) {
        negativeNumbers++;
      }

      if (n === 0) zeroStatus = 'negative';
    }
  }

  return `${sum} ${negativeNumbers}`;
};
