// Build a function that returns an array of integers from n to 1 where n>0.

const reverseSeq = (n) => {
  const arr = [...Array(n + 1).keys()].sort((a, b) => b - a);
  return arr.slice(0, arr.length - 1);
};

reverseSeq(5);
