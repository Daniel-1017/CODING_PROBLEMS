// return the missing number!
function findNumber(array) {
  const max = Math.max(...array);
  const total = (max * (max + 1)) / 2;
  const sum = array.reduce((acc, curr) => acc + curr, 0);
  return total - sum === 0 ? max + 1 : total - sum;
}

// console.log(findNumber([1, 2, 3]));
console.log(findNumber([13, 11, 10, 3, 2, 1, 4, 5, 6, 9, 7, 8]));
