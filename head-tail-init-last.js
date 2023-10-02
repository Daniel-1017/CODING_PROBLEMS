/* 
Your job is to implement these functions in your given language. Make sure it doesn't edit the array; that would cause problems! Here's a cheat sheet:

| HEAD | <----------- TAIL ------------> |
[  1,  2,  3,  4,  5,  6,  7,  8,  9,  10]
| <----------- INIT ------------> | LAST |

head [x] = x
tail [x] = []
init [x] = []
last [x] = x

TODO: implement the four functions specified.
*/

const head = arr => arr[0];

const tail = arr => arr.slice(1);

const init = arr => arr.slice(0, -1);

const last = arr => arr.slice().pop();
