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

dot(4, 4);
