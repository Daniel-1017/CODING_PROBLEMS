/* 
Reverse and invert all integer values in a given list.

reverse_invert([1,12,'a',3.4,87,99.9,-42,50,5.6]) = [-1,-21,-78,24,-5]
Remove all types other than integer.
*/

const reverseInt = int => {
  return +int.toString().split('').reverse().join('');
};

const reverseInvert = array => {
  return array.filter(Number.isInteger).map(int => {
    if (int < 0) {
      return reverseInt(Math.abs(int));
    } else {
      return reverseInt(int) * -1;
    }
  });
};
