/* 
Modify the kebabize function so that it converts a camel case string into a kebab case.

"camelsHaveThreeHumps"  -->  "camels-have-three-humps"
"camelsHave3Humps"  -->  "camels-have-humps"
"CAMEL"  -->  "c-a-m-e-l"
Notes:

the returned string should only contain lowercase letters

camelCase => kebab-case
*/

// MY SOLUTION
function kebabize(str) {
  return str.split("").filter(l => /[a-z]/gi.test(l)).join``
    .split(/(?=[A-Z])/)
    .map(word => word.toLowerCase()).join`-`;
}

// SOLUTION OF OTHERS
function kebabize(str) {
  return str
    .replace(/[^a-z]/gi, "")
    .replace(/^[A-Z]/, c => c.toLowerCase())
    .replace(/[A-Z]/g, c => `-${c.toLowerCase()}`);
}
