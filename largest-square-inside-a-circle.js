// Determine the area of the largest square that can fit inside a circle with radius r.

// MY SOLUTION
function areaLargestSquare(r) {
  return Math.pow(r * Math.sqrt(2), 2).toFixed() - 0;
}

// SOLUTION OF OTHERS
const areaLargestSquare = r => r * r * 2;
