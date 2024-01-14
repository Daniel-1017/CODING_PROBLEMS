/* 
Your task is to help scouts to encrypt and decrypt thier messages. Write the Encode and Decode functions.

Input/Output
The input string consists of lowercase and uperrcase characters and white . The substitution has to be case-sensitive.

Example
 encode("ABCD")          // => GBCE 
 encode("Ala has a cat") // => Gug hgs g cgt 
 encode("gaderypoluki"); // => agedyropulik
 decode("Gug hgs g cgt") // => Ala has a cat 
 decode("agedyropulik")  // => gaderypoluki
 decode("GBCE")          // => ABCD
*/

const cipher = {
  g: "a",
  a: "g",
  d: "e",
  e: "d",
  r: "y",
  y: "r",
  p: "o",
  o: "p",
  l: "u",
  u: "l",
  k: "i",
  i: "k"
}

const isUpCase = x => x === x.toUpperCase()

const encode = str => {
  return [...str].map(x => {
    if (isUpCase(x)) {
      if (cipher[x.toLowerCase()]) {
        return cipher[x.toLowerCase()].toUpperCase()
      }
    } else {
      if (cipher[x]) return cipher[x]
    }
    return x
  }).join``
}

const decode = str => {
  return encode(str)
}
