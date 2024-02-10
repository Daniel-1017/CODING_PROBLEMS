/* 
Complete the function that accepts a valid string and returns an integer.

Wait, that would be too easy! Every character of the string should be converted to the hex value of its ascii code, then the result should be the sum of the numbers in the hex strings (ignore letters).

Examples
"Yo" ==> "59 6f" ==> 5 + 9 + 6 = 20
"Hello, World!"  ==> 91
"Forty4Three"    ==> 113
*/

function stringToHex(inputString) {
  let hexRepresentation = "";
  for (let i = 0; i < inputString.length; i++) {
    let charCode = inputString.charCodeAt(i); // Get ASCII code of the character
    let hexCode = charCode.toString(16); // Convert ASCII code to hexadecimal
    hexRepresentation += hexCode.toUpperCase(); // Concatenate the hexadecimal code to the result string
  }
  return hexRepresentation;
}

function hexHash(code){
  const convertedToHex = stringToHex(code)
  const onlyNumbers = convertedToHex.match(/[0-9]/g)
  const totalSum = onlyNumbers?.reduce((acc, n) => acc + parseInt(n), 0)
  return totalSum ?? 0
}