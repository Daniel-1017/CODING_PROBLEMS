/* 
Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

"alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

--> "alpha beta gamma delta alpha beta gamma delta"
Words will be separated by a single space. There will be no leading or trailing spaces in the string. An empty string (0 words) is a valid input.
*/

// MY SOLUTION
function removeConsecutiveDuplicates(string) {
  const wordsArray = string.split(" ");
  let word = wordsArray[0];
  const result = [word];
  for (let i = 0; i < wordsArray.length; i++) {
    const w = wordsArray[i];
    if (word !== w) {
      result.push(w);
      word = w;
    }
  }

  return result.join` `;
}

// SOLUTION OF OTHERS
const removeConsecutiveDuplicates = s =>
  s
    .split(" ")
    .filter((x, i, arr) => x != arr[i - 1])
    .join(" ");
