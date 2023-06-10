/* 
You have to create a function that converts integer given as string into ASCII uppercase letters.

All ASCII characters have their numerical order in table.

For example,

from ASCII table, character of number 65 is "A".
Numbers will be next to each other, So you have to split given number to two digit long integers.

For example,

'658776' to [65, 87, 76] and then turn it into 'AWL'.
*/

// MY SOLUTION
function convert(number) {
  let string = "";
  for (let i = 0; i < number.length - 1; i += 2) {
    const asciiCode = number.slice(i, i + 2);
    string += String.fromCharCode(asciiCode);
  }
  return string;
}

// SOLUTION OF OTHERS
function convert(number) {
  return String.fromCharCode(...number.match(/../g));
}
