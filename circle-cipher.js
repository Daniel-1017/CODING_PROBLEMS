/* 
Imagine a circle. To encode the word codewars, we could split the circle into 8 parts (as codewars has 8 letters):

Then add the letters in a clockwise direction:Then remove the circle:
If we read the result from left to right, we get csordaew.

Decoding is the same process in reverse. If we decode csordaew, we get codewars.

Examples:
encode "codewars" -> "csordaew"
decode "csordaew" -> "codewars"
encode "white" -> "wehti"
decode "wehti" -> "white"
*/

function encode(s) {
  let res = ""

  let i = 0
  while (i < s.length) {
    res += s[i]
    if (res.length === s.length) return res
    res += s[s.length - i - 1]
    if (res.length === s.length) return res
    i++
  }

  return ""
}

function decode(s) {
  return [...s].filter((c, i) => i % 2 === 0 && c).join`` + [...s].filter((c, i) => i % 2 === 1 && c).reverse().join``
}