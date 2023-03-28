/* 
Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer.
*/

// MY SOLUTION
function isSortedAndHow(array) {
  const firstNum = array[0];
  const lastNum = array[array.length - 1];

  if (firstNum > lastNum) {
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] < array[i + 1]) return "no";
    }
    return "yes, descending";
  }

  if (firstNum < lastNum) {
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) return "no";
    }
    return "yes, ascending";
  }
}

// SOLUTION OF OTHERS
function isSortedAndHow(arr) {
  return arr.every((x, i) => i == 0 || arr[i] >= arr[i - 1])
    ? "yes, ascending"
    : arr.every((x, i) => i == 0 || arr[i] <= arr[i - 1])
    ? "yes, descending"
    : "no";
}
