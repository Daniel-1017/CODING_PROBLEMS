/* 
Task
Given Two integers a , b , find The sum of them , BUT You are not allowed to use the operators + and -

Notes
The numbers (a,b) may be positive , negative values or zeros .

Returning value will be an integer .

Javascript: the Array reduce methods are disabled, along with eval, require, and module .
Input >> Output Examples
1- Add (5,19) ==> return (24) 

2- Add (-27,18) ==> return (-9)

3- Add (-14,-16) ==> return (-30)
*/

function add(x, y) {
  // Iterate till there is no carry
  while (y != 0) {
    // carry now contains common
    //set bits of x and y
    let carry = x & y;

    // Sum of bits of x and y where at
    //least one of the bits is not set
    x = x ^ y;

    // Carry is shifted by one so that adding
    // it to x gives the required sum
    y = carry << 1;
  }
  return x;
}
