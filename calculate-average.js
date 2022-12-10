/* 
Write a function which calculates the average of the numbers in a given list.
Note: Empty arrays should return 0.
*/

function findAverage(array) {
    let avg = 0
    if (array.length) {
      for (let n of array) {
        avg += n
      }
      return avg / array.length
    }
    return 0;
  }