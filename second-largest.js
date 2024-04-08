/* 
You are given an array of integers. Write a function findSecondLargest to find the second largest integer in the array. The function should handle negative numbers and return null if the array has less than 2 unique numbers.
*/

function findSecondLargest(arr) {
    let uniqueNumbers = [...new Set(arr)];
    if (uniqueNumbers.length < 2) {
        return null;
    }
    uniqueNumbers.sort((a, b) => b - a);
    return uniqueNumbers[1];
}
