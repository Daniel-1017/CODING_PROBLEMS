/* 
This function should return an element from the multidimensional array (length > 0) by the specified indices (length > 0).

For example:

  ( [[1, 2], [3, 4], [5, 6]], [0,0] )  => 1        (arr[0][0]) 
  ( ['one','two','three'], [2] )       => 'three'  (arr[2]) 
  ( [[[ 1, 2, 3]]], [ 0, 0, 1 ] )      => 2        (arr[0][0][1])
*/

// MY SOLUTION
function getElement(array, indexes) {
    if (indexes.length === 1) return array[indexes[0]];
    return getElement(array[indexes[0]], indexes.slice(1));
}

// SOLUTION OF OTHERS
function getElement(array, indexes) {
    return indexes.reduce((a, i) => a[i], array);
}