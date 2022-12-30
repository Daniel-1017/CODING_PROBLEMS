/* 
Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Example:
spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
*/

// MY SOLUTION
function spinWords(string) {
  const split = string.split(" ").map((word) => {
    return word.length >= 5 ? word.split("").reverse().join("") : word;
  });

  return split.join(" ");
}

// SOLUTION OF OTHERS
function spinWords(string) {
  return string.replace(/\w{5,}/g, function (w) {
    return w.split("").reverse().join("");
  });
}
