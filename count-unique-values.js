// MY SOLUTION
function countUniqueValues(values) {
  const arr = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i] !== values[i + 1]) {
      arr[i] = values[i];
    }
  }

  return arr.filter((item) => typeof item === "number").length;
}

countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]); // 7

// SOLUTION OF OTHERS
function countUniqueValues(arr) {
  if (arr.length === 0) return 0;

  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }

  return i + 1;
}

countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]); // 7
