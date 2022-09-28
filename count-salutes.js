/* 
There is a narrow hallway in which people can go right and left only. When two people meet in the hallway, by tradition they must salute each other. People move at the same speed left and right.

Your task is to write a function that, given a string representation of people moving in the hallway, will count the number of salutes that will occur.
Note: 2 salutes occur when people meet, one to the other and vice versa.

Input
People moving right will be represented by >; people moving left will be represented by <. An example input would be >--<--->->. The - character represents empty space, which you need not worry about.

Examples
Input: >----->-----<--<
Output: 8

Explanation: Both guys moving right will meet both guys moving left.
Hence a total of 4 meetings will occur and 8 salutes will occur.

Input: <---<--->----<
Output: 2

Explanation: Only one meeting occurs.
*/

// MY SOLUTION
function countSalutes(hallway) {
  let peopleMovingLeft = 0;

  for (let i = 0; i < hallway.length; i++) {
    let movingLeft = 0;
    if (hallway[i] === ">") {
      const newString = hallway.slice(i, hallway.length);
      // newString = rest of the string after person, at index of i, moving right

      for (let j = 0; j < newString.length; j++) {
        if (newString[j] === "<") {
          movingLeft++;
        }
      }

      peopleMovingLeft += movingLeft;
    }
  }

  return peopleMovingLeft * 2;
}

countSalutes(">>>>>>>>>>>>>>>>>>>>>----<->");

// SOLUTIONS OF OTHERS
function countSalutes(hallway) {
  let right = 0;
  let salutes = 0;
  for (let p of [...hallway]) {
    if (p === ">") right += 1;
    else if (p === "<") salutes += 2 * right;
  }
  return salutes;
}
