// return the missing number!
function findNumber(array) {
  const max = Math.max(...array);
  const total = (max * (max + 1)) / 2;
  const sum = array.reduce((acc, curr) => acc + curr, 0);
  return total - sum === 0 ? max + 1 : total - sum;
}
