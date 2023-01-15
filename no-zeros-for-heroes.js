/*
Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105
Zero alone is fine, don't worry about it. Poor guy anyway
*/

// MY SOLUTION
function noBoringZeros(n) {
 	const str = Math.abs(n).toString()
 	const symbol = n.toString()[0]
 	let newN = ""
 	for (let i = str.length - 1; i >= 0; i--) {
 		if (str[i] !== "0") {
 			newN = str.slice(0, i + 1)
 			break
 		}
 	}
 	return symbol === "-" ?  -+newN : +newN
}

// SOLUTION OF OTHERS
function noBoringZeros(n) {
  return +`${n}`.replace(/0*$/, "");
}