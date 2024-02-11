/* 
Reverse a message so that the words and letters passed into it are made lower case and reversed. In addition, capitalize the first letter of the newly reversed words. If a number or symbol(!#,>) is now in the first position of the word, no capitalization needs to occur.

Example:

reverseMessage('This is an example of a Reversed Message!');
Returns: '!egassem Desrever A Fo Elpmaxe Na Si Siht'
*/

function reverseMessage(str) {
  return !str ? "" : str.split(" ").reverse().map(word => [...word].reverse()[0].toUpperCase() + [...word].reverse().slice(1).join``.toLowerCase()).join` `
}