/* 
Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // true 
*/

function areThereDuplicates(...vals) {
  const obj = {};

  for (let val of vals) {
    obj[val] ? (obj[val] += 1) : (obj[val] = 1);
  }

  for (let val of Object.values(obj)) {
    if (val > 1) {
      return true;
    }
  }

  return false;
}

areThereDuplicates("a", "b", "c", "a");
