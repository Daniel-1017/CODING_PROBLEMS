/* 
A triangle is called an equable triangle if its area equals its perimeter. Return true, if it is an equable triangle, else return false. You will be provided with the length of sides of the triangle. Happy Coding!
*/

function equableTriangle(a, b, c) {
  const p = a + b + c,
    semiP = p / 2;
  return p === Math.sqrt(semiP * (semiP - a) * (semiP - b) * (semiP - c));
}
