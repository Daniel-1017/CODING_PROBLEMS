/* 
Implement the function which should return true if given object is a vowel (meaning a, e, i, o, u, uppercase or lowercase), and false otherwise.
*/

// MY SOLUTION
String.prototype.vowel = function () {
  const string = this;
  return string.length > 1 || string.length < 1
    ? false
    : "aeiou".includes(string.toLowerCase());
};

// SOLUTION OF OTHERS
String.prototype.vowel = function () {
  return /^[aeiou]$/i.test(this);
};
