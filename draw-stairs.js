/* 
Given a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in the top left.

For example n = 3 result in: "I\n I\n  I"
*/

function drawStairs(n) {
  if (n === 1) return "I";
  let str = "";
  for (let i = 0; i < n; i++) {
    str += " ".repeat(i) + "I\n";
  }
  return str.slice(0, str.length - 1);
}
