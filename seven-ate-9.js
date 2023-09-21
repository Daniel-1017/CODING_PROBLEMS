/* 
Write a function that removes every lone 9 that is inbetween 7s.

"79712312" --> "7712312"
"79797"    --> "777"
*/

// MY SOLUTION
function sevenAte9(str) {
  str = str.split("");
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "9" && str[i - 1] === "7" && str[i + 1] === "7") str[i] = "";
  }
  return str.join``;
}

// SOLUTION OF OTHERS
function sevenAte9(str) {
  return str.replace(/79(?=7)/g, "7");
}
