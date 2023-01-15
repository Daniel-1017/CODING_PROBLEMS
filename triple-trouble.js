/*
Triple Trouble
Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!

E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"

Note: You can expect all of the inputs to be the same length.
*/

function tripleTrouble(s1, s2, s3) {
	let final = ""
	for (let i = 0; i < s1.length; i++) {
		final += `${s1[i]}${s2[i]}${s3[i]}`
	}
	return final
}