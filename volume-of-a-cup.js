/* 
Your job is to return the volume of a cup when given the diameter of the top, the diameter of the bottom and the height.

You know that there is a steady gradient from the top to the bottom.

You want to return the volume rounded to 2 decimal places.

Exmples:

cupVolume(1, 1, 1) -> returns 0.79

cupVolume(10, 8, 10) -> returns 638.79

cupVolume(1000, 1000, 1000) -> returns 785398163.4

cupVolume(13.123, 123.12, 1) -> returns 4436.57

cupVolume(5, 12, 31) -> returns 1858.51
You will only be passed positive numbers.
*/

function calculateCircleArea(diameter) {
  // Check if the input is valid (non-negative number)
  if (typeof diameter !== 'number' || diameter < 0) {
    return "Invalid input. Please provide a non-negative number for the diameter.";
  }

  // Calculate the radius from the diameter
  var radius = diameter / 2;

  // Calculate the area using the formula
  var area = Math.PI * Math.pow(radius, 2);

  return area;
}


function cupVolume(d1, d2, height) {
  const d1Area = calculateCircleArea(d1), d2Area = calculateCircleArea(d2);
  const volume = (d1Area + d2Area + Math.sqrt(d1Area * d2Area)) * height / 3;
  return +volume.toFixed(2)
}