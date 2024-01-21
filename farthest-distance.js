/* 
You are given a array which contains sub-arrays. Each sub-array represents a point in a (2d) cartesian coordinate system.

Create a function which returns the distance of the two points which are farthest apart.

All distances are to be rounded to 2 decimal places. If the array contains two points return the distance between them. There will always be at least two points.

furthest_distance([[1,2], [3,8], [4,3]]) # returns 6.32
Distances between

[1,2] [3,8] : 6.32

[3,8] [4,3] : 5.10

[1,2] [4,3] : 3.16
*/

function calculateDistance(point1, point2) {
  // Extract coordinates
  const [x1, y1] = point1;
  const [x2, y2] = point2;

  // Calculate distance using the formula
  const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

  return distance;
}

function furthestDistance(arr){
  let maxDistance = 0;
  for(let i=0; i<arr.length-1; i++){
    for(let j=i+1; j<arr.length; j++){
      const currentDistance = calculateDistance(arr[i], arr[j]);
      if(currentDistance > maxDistance){
        maxDistance = currentDistance;
      }
    }
  }
  return +maxDistance.toFixed(2);
}