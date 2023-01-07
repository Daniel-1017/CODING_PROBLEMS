/*
Write a function that when given a number >= 0, returns an Array of ascending length subarrays.

pyramid(0) => [ ]
pyramid(1) => [ [1] ]
pyramid(2) => [ [1], [1, 1] ]
pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]
Note: the subarrays should be filled with 1s
*/

// MY SOLUTION
function pyramid(n) {
	const pyramid = []
	for (let i = 1; i <= n ; i++) {
		const arr = []
		for (let j = 1; j <= i; j++) {
			arr.push(1)
		}
		pyramid.push(arr)
	}
	return pyramid
}

// SOLUTION OF OTHERS
function pyramid(n) {
  const res = [];
  for(let i = 0; i < n; i++){
    res.push([...Array(i+1)].fill(1))
  }
  return res;
}