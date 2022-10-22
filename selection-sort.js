function swap(arr, idx1, idx2) {
  return ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let smallest = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j + 1] < arr[smallest]) {
        smallest = j + 1;
      }
    }

    if (smallest !== i) {
      swap(arr, smallest, i);
    }
  }

  return arr;
}

selectionSort([99, 140, 1, 5, 16, 85, 40, 29, 200, 5049, 11, 3]);
/* 
EXPECTED OUTPUT
[
   1,   3,   5,   11,
  16,  29,  40,   85,
  99, 140, 200, 5049 
]
*/
