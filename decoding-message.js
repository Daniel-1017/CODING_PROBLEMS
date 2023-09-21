/* 
You have managed to intercept an important message and you are trying to read it.

You realise that the message has been encoded and can be decoded by switching each letter with a corresponding letter.

You also notice that each letter is paired with the letter that it coincides with when the alphabet is reversed.

For example: "a" is encoded with "z", "b" with "y", "c" with "x", etc

You read the first sentence:

"r slkv mlylwb wvxlwvh gsrh nvhhztv"
After a few minutes you manage to decode it:

"i hope nobody decodes this message"
*/

function decode(message) {
  let result = "";
  for (let char of message) {
    if (char === " ") result += " ";
    else {
      const ascii = char.charCodeAt() - 97;
      result += String.fromCharCode(96 + 26 - ascii);
    }
  }
  return result;
}
