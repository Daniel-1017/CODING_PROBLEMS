/* 
Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
flatten([[1],[2],[3]]) // [1,2,3]
flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]
*/

function flatten(array) {
  let flattenedArr = [];
  for (let item of array) {
    if (typeof item === "object") {
      flattenedArr = flattenedArr.concat(flatten(item));
    } else {
      flattenedArr.push(item);
    }
  }

  return flattenedArr;
}

flatten([
  1,
  2,
  3,
  [
    1,
    [2, [345], 23, 3, [1, [234, 4, 5, [6]]], [21, [2, 3, 4]]],
    [1, 2, 3, 4, [5, 6]],
  ],
]);

/*
EXPECTED OUTPUT 
[
  1,   2, 3, 1, 2, 345, 23, 3,
  1, 234, 4, 5, 6,  21,  2, 3,
  4,   1, 2, 3, 4,   5,  6    
]
*/
