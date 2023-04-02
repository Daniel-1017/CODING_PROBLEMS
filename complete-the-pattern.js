/* 
Task:
You have to write a function pattern which returns the following Pattern(See Pattern & Examples) upto n number of rows.

Note:Returning the pattern is not the same as Printing the pattern.
Rules/Note:
If n < 1 then it should return "" i.e. empty string.
There are no whitespaces in the pattern.
Pattern:
1
22
333
....
.....
nnnnnn

Hint: Use \n in string to jump to next line
*/

function pattern(n) {
  let finalString = "";
  for (let i = 1; i <= n; i++) {
    finalString += `\n${String(i).repeat(i)}`;
  }
  return finalString.slice(1);
}
