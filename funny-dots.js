/* 
Funny Dots
You will get two integers n (width) and m (height) and your task is to draw the following pattern. Each line is seperated with a newline (\n)

Both integers are equal or greater than 1; no need to check for invalid parameters.

Examples

                                            +---+---+---+
             +---+                          | o | o | o |
dot(1, 1) => | o |            dot(3, 2) =>  +---+---+---+            
             +---+                          | o | o | o |
                                            +---+---+---+
*/

function dot(w, h) {
  const hWall = "---+";
  const vWall = " o |";
  let string = "+" + hWall.repeat(w) + "\n";
  for (let i = 1; i <= h; i++) {
    string += "|" + vWall.repeat(w) + "\n";
    string += "+" + hWall.repeat(w) + "\n";
  }
  return string.slice(0, -1);
}
