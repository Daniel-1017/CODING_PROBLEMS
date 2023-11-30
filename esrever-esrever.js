/* 
In this kata you must take an input string, reverse the order of the words, and reverse the order of the letters within the words.

But, as a bonus, every test input will end with a punctuation mark (! ? .) and the output should be returned with the mark at the end.

A few examples should help clarify:

esrever("hello world.") == "dlrow olleh."

esrever("Much l33t?") == "t33l hcuM?"

esrever("tacocat!") == "tacocat!"
Quick Note: A string will always be passed in (though it may be empty) so no need for error-checking other types.
*/

// MY SOLUTION
function esrever(str) {
  if (!str) return '';

  const reversedArr = str.match(/[^ ]/gi).join``
    .slice(0, -1)
    .split('')
    .reverse();
  const punctuationMark = str[str.length - 1];

  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === ' ') reversedArr.splice(str.length - i - 2, 0, ' ');
  }

  return `${reversedArr.join``}${punctuationMark}`;
}

// SOLUTION OF OTHERS
function esrever(s) {
  return s.slice(0, -1).split('').reverse().join('') + s.slice(-1);
}
