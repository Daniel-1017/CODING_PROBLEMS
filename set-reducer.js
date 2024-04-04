/* 
Example

[0, 4, 6, 8, 8, 8, 5, 5, 7] => [1, 1, 1, 3, 2, 1]

Your function should then repeat the process on the resulting array, and on the resulting array of that, until it returns a single integer:

[0, 4, 6, 8, 8, 8, 5, 5, 7] =>  [1, 1, 1, 3, 2, 1] => [3, 1, 1, 1] => [1, 3] => [1, 1] => [2]

When your function has reduced the array to a single integer following these rules, it should return that integer.

[2] => 2

Rules and assertions
All test arrays will be 2+ in length
All integers in the test arrays will be positive numbers from 0 - 9
You should return an integer, not an array with 1 element
*/

function setReducer(input) {
    if (input.length === 1) return input[0];

    const newArray = [];
    let count = 1;

    for (let i = 1; i < input.length; i++) {
        if (input[i] === input[i - 1]) {
            count++;
        } else {
            newArray.push(count);
            count = 1;
        }
    }
    newArray.push(count);
    return setReducer(newArray);
}
