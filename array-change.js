/* 
Task
You are given an array of integers. On each move you are allowed to increase exactly one of its element by one. Find the minimal number of moves required to obtain a strictly increasing sequence from the input.

Example
For arr = [1, 1, 1], the output should be 3.

Input/Output
[input] integer array arr

Constraints:

3 ≤ inputArray.length ≤ 100,

-10000 ≤ inputArray[i] ≤ 10000.

[output] an integer

The minimal number of moves needed to obtain a strictly increasing sequence from inputArray.

It's guaranteed that for the given test cases the answer always fits signed 32-bit integer type.
*/

const arrayChange = (arr, minMoves = 0, i = 1) => {
    if (i === arr.length) return minMoves;

    if (arr[i] > arr[i - 1]) return arrayChange(arr, minMoves, i + 1);

    let count = arr[i];
    while (count <= arr[i - 1]) {
        count++;
    }

    minMoves += Math.abs(arr[i] - count);
    arr[i] = count;
    return arrayChange(arr, minMoves, i + 1);
};
