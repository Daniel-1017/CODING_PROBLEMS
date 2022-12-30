/*
Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

Example:

'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb'
*/

// MY SOLUTION
function switcheroo(x) {
  const str = x.split("");
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "a") {
      str[i] = "b";
    } else if (str[i] === "b") {
      str[i] = "a";
    }
  }
  return str.join("");
}

// SOLUTION OF OTHERS
const switcheroo = (x) => x.replace(/[ab]/g, (x) => (x == "a" ? "b" : "a"));
