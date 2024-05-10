/* 
Write

String.prototype.formatWith = function () {}
that takes in a list of arguments and formats the string based off these arguments and indices.

For example:

'Hello {0}'.formatWith('Codewars') ===  'Hello Codewars'
'{0} + {0} = {1}'.formatWith('1','2') ===  '1 + 1 = 2'
'Testing {1}'.formatWith('kata') === 'Testing {1}' // there is no arguments at position 1
*/

// MY SOLUTION
String.prototype.formatWith = function () {
  let str = this;

  for (let i = 0; i < arguments.length; i++) {
    const argument = arguments[i];
    str = str.replaceAll(`{${i}}`, argument);
  }
  return str;
};

// SOLUTION OF OTHERS
String.prototype.formatWith = function (...args) {
  return this.replace(/\{(\d+)\}/g, (s, n) => (n < args.length ? args[n] : s));
};
