/* 
Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

Notes:

Only lower case letters will be used (a-z). No punctuation or digits will be included.
Performance needs to be considered.
Examples
scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False
*/

// MY SOLUTION
function scramble(str1, str2) {
  const dictStr2 = {};
  const dictStr1 = {};
  for (let i of str2) dictStr2[i] = (dictStr2[i] || 0) + 1;
  for (let i of str1) dictStr1[i] = (dictStr1[i] || 0) + 1;

  for (let key in dictStr2) {
    if (dictStr1[key] >= dictStr2[key]) continue;
    return false;
  }
  return true;
}

// SOLUTION OF OTHERS
function scramble(str1, str2) {
  let occurences = str1.split("").reduce((arr, cur) => {
    arr[cur] ? arr[cur]++ : (arr[cur] = 1);
    return arr;
  }, {});
  return str2.split("").every(character => --occurences[character] >= 0);
}
