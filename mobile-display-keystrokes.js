/* 
Do you remember the old mobile display keyboards? Do you also remember how inconvenient it was to write on it?
Well, here you have to calculate how many keystrokes you have to do for a specific word.

This is the layout:


Given a string, return the number of keystrokes necessary to type it. You can assume that the input will entirely consist of characters included in the mobile layout (lowercase letters, digits, and the symbols * and #).

Examples
"*#"       =>  2 (1 + 1)
"123"      =>  3 (1 + 1 + 1)
"abc"      =>  9 (2 + 3 + 4)
"codewars" => 26 (4 + 4 + 2 + 3 + 2 + 2 + 4 + 5)
*/

const map = {
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz",
};

const mobileKeyboard = str => {
  let count = 0;
  for (const char of str) {
    if (
      (typeof parseInt(char) === "number" && !isNaN(parseInt(char))) ||
      char === "#" ||
      char === "*"
    ) {
      count++;
      continue;
    }
    for (let key in map) {
      const indexOfChar = map[key].indexOf(char);
      if (indexOfChar === -1) continue;
      count += indexOfChar + 2;
    }
  }
  return count;
};
