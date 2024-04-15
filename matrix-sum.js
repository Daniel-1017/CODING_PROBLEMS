/* 
Given a matrix, find the sum of all the even numbers

Example 
[
    [9, 4, 2],
    [9, 9, 4],
    [2, 8, 2]
];
Result: 22
*/

const evensSum = matrix => {
    const getEvens = nums => nums.filter(n => !(n % 2));
    const getSum = nums => nums.reduce((acc, n) => acc + n);
    return matrix.reduce((acc, row) => acc + getSum(getEvens(row)), 0);
};
