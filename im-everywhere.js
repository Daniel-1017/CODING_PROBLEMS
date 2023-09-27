/* 
Overview
Many people know that Apple uses the letter "i" in almost all of its devices to emphasize its personality.

And so John, a programmer at Apple, was given the task of making a program that would add that letter to every word. Let's help him do it, too.

Task:
Your task is to make a function that takes the value of word and returns it with an "i" at the beginning of the word. For example we get the word "Phone", so we must return "iPhone". But we have a few rules:

The word should not begin with the letter "I", for example Inspire.
The number of vowels should not be greater than or equal to the number of consonants, for example East or Peace. ("y" is considered a consonant)
The first letter should not be lowercase, for example road.
If the word does not meet the rules, we return "Invalid word".
*/

const getVowels = word => {
  const vowels = word.match(/[aeiou]/gi);
  return vowels ? vowels.length : 0;
};

const getConsonants = word => {
  const consonants = word.match(/[^aeiou]/gi);
  return consonants ? consonants.length : 0;
};

const checkFirstLetter = word => {
  return word[0] !== word[0].toUpperCase();
};

const checkValidWord = word => {
  if (word[0] === "I") return false;

  if (getVowels(word) >= getConsonants(word)) return false;

  if (checkFirstLetter(word)) return false;

  return true;
};

const i = word => {
  if (!word.length || !checkValidWord(word)) return "Invalid word";
  return "i" + word;
};
