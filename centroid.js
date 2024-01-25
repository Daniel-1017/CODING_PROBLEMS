/* 
Write a function centroid(c) to calculate the centroid of 3D coordinates.

Return the results as a list of floats. Round the values to two decimal places.
*/

const round = n => Math.round(n * 100) / 100

const centroid = points => {
  let sumX = 0, sumY = 0, sumZ = 0;

  for (let i = 0; i < points.length; i++) {
    sumX += points[i][0];
    sumY += points[i][1];
    sumZ += points[i][2];
  }

  const centroidX = round(sumX / points.length), centroidY = round(sumY / points.length), centroidZ = round(sumZ / points.length);

  return [centroidX, centroidY, centroidZ];
}