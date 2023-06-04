/* 
Complete the code which should return true if the given object is a single ASCII letter (lower or upper case), false otherwise.
*/

String.prototype.isLetter = function () {
  return this.length > 1 ? false : new RegExp(/^[a-z]+$/i).test(this);
};
