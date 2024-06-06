/* 
Given a string of numbers, you must perform a method in which you will translate this string into text, based on the below image:


For example if you get "22" return "b", if you get "222" you will return "c". If you get "2222" return "ca".

Further details:

0 is a space in the string.
1 is used to separate letters with the same number.
always transform the number to the letter with the maximum value, as long as it does not have a 1 in the middle. So, "777777" -->  "sq" and "7717777" --> "qs".
you cannot return digits.
Given a empty string, return empty string.
Return a lowercase string.
Examples:
"443355555566604466690277733099966688"  -->  "hello how are you"
"55282"                 -->  "kata"
"22266631339277717777"  -->  "codewars"
"66885551555"           -->  "null"
"833998"                -->  "text"
"000"                   -->  "   "
*/
const keypadMapping = {
  0: " ",
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz",
};

const chunkify = (string, chunkSize) => {
  const chunks = [];
  for (let i = 0; i < string.length; i += chunkSize) {
    chunks.push(string.slice(i, i + chunkSize));
  }
  return chunks;
};

const splitInGroups = digits => digits.match(/(\d)\1*/g);

const phoneWords = digits => {
  const digitGroups = splitInGroups(digits);
  return (
    digitGroups
      ?.map(digitGroup => {
        if (digitGroup.includes("1")) return "";
        const keypadChars = keypadMapping[digitGroup[0]];
        const chunks = chunkify(digitGroup, keypadChars.length);
        return chunks.reduce(
          (acc, chunk) => acc + keypadChars[chunk.length - 1],
          ""
        );
      })
      .join("") || ""
  );
};
