/* 
Lexical this
Complete the Person object, by completing the FillFriends function to fill the _friends Array for the person object.
*/

const Person = function () {
  const person = {
    _name: "Leroy",
    _friends: [],
    fillFriends(f) {
      this._friends = [...f];
    },
  };
  return person;
};
