/* 
PPAP

Take two arrays consisting of two strings in each array and combine them into one hyphen seperated string. The first character of each word should be capitalized, no matter the input case. The word common to both arrays should appear as the first and last words in the new string.

Finally, the order of the final string should be the non-common word in the second array as the second word, and the non-common word in the first array as the 3rd word.
*/

const capitalize = word => {
  return word ? word[0].toUpperCase() + word.slice(1).toLowerCase() : false;
};

const toLower = el => el.toLowerCase();

const findCommonElements = (array1, array2) => {
  return array1.filter(element => array2.includes(element))[0];
};

const findNotCommonElements = (array1, array2) => {
  return array1.filter(element => !array2.includes(element))[0];
};

const ppap = (arr1, arr2) => {
  const commonWord = capitalize(
    findCommonElements(arr1.map(toLower), arr2.map(toLower))
  );
  const notCommonWord1 = capitalize(
    findNotCommonElements(arr1.map(toLower), arr2.map(toLower))
  );
  const notCommonWord2 = capitalize(
    findNotCommonElements(arr2.map(toLower), arr1.map(toLower))
  );

  return `${commonWord}-${notCommonWord2}-${notCommonWord1}-${commonWord}`;
};
