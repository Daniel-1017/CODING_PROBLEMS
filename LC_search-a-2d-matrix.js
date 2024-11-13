/* 
You are given an m x n integer matrix matrix with the following two properties:

Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.
*/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// MY SOLUTION
var searchMatrix = function (matrix, target) {
    for (const row of matrix) {
        if (row[row.length - 1] < target) continue;
        return row.includes(target);
    }
    return false;
};

// SOLUTION OF OTHERS
var searchMatrix = function (matrix, target) {
    let m = matrix.length;
    let n = matrix[0].length;

    let left = 0;
    let right = m * n - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let midValue = matrix[Math.floor(mid / n)][mid % n];

        if (midValue === target) {
            return true;
        } else if (midValue < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return false;
};
