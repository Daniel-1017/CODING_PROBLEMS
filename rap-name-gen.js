/* 
It seems as though the infamous soundcloud rapper "6ix 9ine" has been locked away for good. As sad as this may be, his name will surely live on...

Write a function that takes a string representing a date-of-birth as an argument ("dd.mm.yy") and returns a string containing the generated Rap-Name.

How to figure out one's Rap-Name:

Find the average of the two digits that make up the DAY of birth. ("DD.mm.yy")
Find the average of the two digits that make up the YEAR of birth. ("dd.mm.YY")
Note: only integers are admissible, therefore round up averages that are decimal
Note: if the average of the YEAR of birth is 0 (in the case of "dd.mm.00"), the format is '0ero'
Return a single string containing both numbers represented in the following format - e.g, '3hree 6ix'
format = the respective number replaces the first character for the word of said number. 'three' becomes '3hree'
*/

// MY SOLUTION
const map = {
  0: "ero",
  1: "ne",
  2: "wo",
  3: "hree",
  4: "our",
  5: "ive",
  6: "ix",
  7: "even",
  8: "ight",
  9: "ine",
};

const getAvg = numbers =>
  numbers.reduce((acc, n) => acc + +n, 0) / numbers.length;

const rapNameGen = dob => {
  const [dd, mm, yyyy] = dob.split(".");
  const ddAvg = Math.round(getAvg([...dd]));
  const yyyyAvg = Math.round(getAvg([...yyyy]));
  return `${ddAvg}${map[ddAvg]} ${yyyyAvg}${map[yyyyAvg]}`;
};

// SOLUTION OF OTHERS
rapNameGen = Q =>
  Q.split(/\..../).map(
    ([Q, S]) =>
      `0ero1ne2wo3hree4our5ive6ix7even8ight9ine`.split(/(?=\d)/)[
        (+Q + -~S) >> 1
      ]
  ).join` `;
