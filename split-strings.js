/* 
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
*/

// MY SOLUTION
function solution(str) {
  const arr = [];
  if (str.length % 2 === 0) {
    for (let i = 0; i < str.length; i += 2) {
      arr.push(str[i] + str[i + 1]);
    }
  } else {
    for (let i = 0; i < str.length - 2; i += 2) {
      arr.push(str[i] + str[i + 1]);
    }
    arr.push(str[str.length - 1] + "_");
  }

  return arr;
}

// SOLUTION OF OTHERS
function solution(s) {
  return (s + "_").match(/.{2}/g) || [];
}
