/* 
Complete the function that returns the color of the given square on a normal, 8x8 chess board:

Examples
"a", 8  ==>  "white"
"b", 2  ==>  "black"
"f", 5  ==>  "white"
*/

// MY SOLUTION
function mineColor(file, rank) {
  const board = [
    ["black", "white", "black", "white", "black", "white", "black", "white"],
    ["white", "black", "white", "black", "white", "black", "white", "black"],
    ["black", "white", "black", "white", "black", "white", "black", "white"],
    ["white", "black", "white", "black", "white", "black", "white", "black"],
    ["black", "white", "black", "white", "black", "white", "black", "white"],
    ["white", "black", "white", "black", "white", "black", "white", "black"],
    ["black", "white", "black", "white", "black", "white", "black", "white"],
    ["white", "black", "white", "black", "white", "black", "white", "black"]
  ]
	const letters = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8
  }
  
  return board[letters[file] - 1][rank - 1]
}

// SOLUTION OF OTHERS
const mineColor=(l, n)=>(l.charCodeAt()-97+n)%2 ? "black" : "white";