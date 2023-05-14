/* 
Write a function called "filterEvenLengthWords".

Given an array of strings, "filterEvenLengthWords" returns an array containing only the elements of the given array whose length is an even number.
*/

function filterEvenLengthWords(words) {
  return words.filter(word => !(word.length % 2));
}
