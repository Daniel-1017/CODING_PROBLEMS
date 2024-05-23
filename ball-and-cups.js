/* 
Ronny the robot is watching someone perform the Cups and Balls magic trick. The magician has one ball and three cups, he shows Ronny which cup he hides the ball under (b), he then mixes all the cups around by performing multiple two-cup switches (arr). Ronny can record the switches but can't work out where the ball is. Write a programme to help him do this.

Rules:

There will only ever be three cups.
Only two cups will be swapped at a time.
The cups and their switches will be refered to by their index in a row of three, beginning at one. So [[1,2]] means the cup at position one, is swapped with the cup at position two.
Arr will be an array of integers 1 - 3 organised in pairs.
There won't be any empty sub-arrays.
If arr is just an empty array b should be returned.
Examples:

(b) = 2, (arr) = [[1,2]]

The ball is under cup number : 1
*/

// MY SOLUTION
const swapInPlace = (arr, index1, index2) => {
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
};

const cupAndBalls = (b, swaps) => {
  if (!swaps.length) return b;
  const res = [1, 2, 3];
  swaps.forEach(swap => {
    swapInPlace(res, swap[0] - 1, swap[1] - 1);
  });
  return res.indexOf(b) + 1;
};

// SOLUTION OF OTHERS
const cupAndBalls = (ball, pairs) =>
  pairs.reduce((ball, [a, b]) => (a == ball ? b : b == ball ? a : ball), ball);
