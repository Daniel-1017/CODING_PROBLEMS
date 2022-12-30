/*
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
*/

// MY SOLUTION
function findOdd(A) {
  const odd = {};
  for (let i of A) {
    if (odd[i]) {
      odd[i]++;
    } else {
      odd[i] = 1;
    }
  }
  const idx = Object.values(odd).indexOf(
    Object.values(odd).filter((n) => n % 2 === 1)[0]
  );
  return +Object.keys(odd)[idx];
}

// SOLUTION OF OTHERS
function findOdd(A) {
  return A.reduce(function (c, v) {
    return c ^ v;
  }, 0);
}

function findOdd(A) {
  var obj = {};
  A.forEach(function (el) {
    obj[el] ? obj[el]++ : (obj[el] = 1);
  });

  for (prop in obj) {
    if (obj[prop] % 2 !== 0) return Number(prop);
  }
}

function findOdd(arr) {
  return arr.find((item, index) => arr.filter((el) => el == item).length % 2);
}
