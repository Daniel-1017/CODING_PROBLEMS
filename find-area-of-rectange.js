/* 
Find the area of a rectangle when provided with one diagonal and one side of the rectangle. If the input diagonal is less than or equal to the length of the side, return "Not a rectangle". If the resultant area has decimals round it to two places.

This kata is meant for beginners. Rank and upvote to bring it out of beta!
*/

function area(d, l) {
  if (l >= d) return "Not a rectangle";
  const side = Math.sqrt(d ** 2 - l ** 2);
  return +(side * l).toFixed(2);
}
