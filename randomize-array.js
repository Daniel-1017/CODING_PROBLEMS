/* 
You are given an array of any length. Write a function randomizeArray to return a new array that contains the same elements but in a random order. The function should not modify the original array.

Input:

An array of any length.

Output:

A new array with the same elements but in a random order.

Example:

In this example, the function returns a new array with the same elements as the input array but in a random order.
*/

function randomizeArray(arr) {
    let newArr = [...arr];
    for (let i = newArr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
}
