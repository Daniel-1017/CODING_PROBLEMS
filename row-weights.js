/* 
Task
Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

Notes
Array size is at least 1.
All numbers will be positive.
Input >> Output Examples
rowWeights([13, 27, 49])  ==>  return (62, 27)
Explanation:
The first element 62 is the total weight of team 1, and the second element 27 is the total weight of team 2.

rowWeights([50, 60, 70, 80])  ==>  return (120, 140)
Explanation:
The first element 120 is the total weight of team 1, and the second element 140 is the total weight of team 2.
*/

function rowWeights(array) {
  let row1 = 0,
    row2 = 0;
  for (let i = 0; i < array.length; i++) {
    const n = array[i];

    if (i % 2) row2 += n;
    else row1 += n;
  }
  return [row1, row2];
}
