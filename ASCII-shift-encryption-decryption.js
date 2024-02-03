/* 
Ascii Shift Encryption/Decryption
The goal of this kata is to create a very simple ASCII encryption and decryption. The encryption algorithm should shift each character's charCode by the character's current index in the string (0-based).

The input strings will never require to go outside of the ASCII range.

Example:
  p | a | s | s | w | o | r | d # Plaintext
+ 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 # Shift (add)
  p | b | u | v | { | t | x | k # CipherText
The decryption should reverse this:

  p | b | u | v | { | t | x | k # CipherText
- 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 # Shift (subtract)
  p | a | s | s | w | o | r | d # Plaintext
*/

function asciiEncrypt(plainText) {
  return [...plainText].map((char, i) => String.fromCharCode(char.charCodeAt() + i)).join``;
}
  
function asciiDecrypt(cipherText) {
  return [...cipherText].map((char, i) => String.fromCharCode(char.charCodeAt() - i)).join``;
}