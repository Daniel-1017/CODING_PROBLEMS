/* 
You are given an array of numbers. Check if the array contains of pairs, i.e every number occurs exactly two times. If true, return true, otherwise false. Your solution should not modify the input array.
*/

// MY SOLUTION
function twins(myArray) {
  const hash = {}
  for (let n of myArray) {
    hash[n] = (hash[n] || 0) + 1
    if (hash[n] > 2) return false
  }
  for (let n in hash) if (hash[n] != 2) return false
  return true
}


// SOLUTION OF OTHERS
function twins(myArray){
  return myArray.every(x => myArray.filter(y => x == y).length == 2)
}