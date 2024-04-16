/* 
You are given a string and a character. Write a function countOccurrences to count the number of occurrences of the character in the string. The function should be case-sensitive.

Function Signature:

Input:

A string and a character.

Output:

The number of occurrences of the character in the string.

Example:

In this example, the character 'o' appears twice in the string "Hello World", so the function returns 2.
*/

function countOccurrences(str, char) {
    return str.split(char).length - 1;
}
