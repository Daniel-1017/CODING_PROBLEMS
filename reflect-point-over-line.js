/* 
Write a function that reflects a point over a given line and returns the reflected point as a tuple.

Arguments:
- point: a tuple of the form (x,y) representing the coordinates of the point to be reflected
- line: a tuple of the form (m,b) representing the slope-intercept equation of the line y=mx+b

Returns:
- A tuple of the form (x',y') representing the coordinated of the reflected point
- x' and y' should be accurate within a margin of 0.00001

Examples:
reflect((2, 3), (1, 0)) ==  (3, 2)
reflect((1, 2), (3, 4)) == (-2, 3)
reflect((-2, -3), (-1, 0)) == (3, 2)

Tests:
- Fixed and Randomized Tests
- For randomized tests x,y,m,b are sampled in batches from ±10 ** 8
- 100 assertions per batch (800 in total)
*/

function reflect(point, line) {
    const [x1, y1] = point;
    const [m, b] = line;

    const d = (x1 + (y1 - b) * m) / (1 + m * m);

    const xPrime = 2 * d - x1;
    const yPrime = 2 * d * m - y1 + 2 * b;

    return [parseFloat(xPrime.toFixed(5)), parseFloat(yPrime.toFixed(5))];
}
