/* 
Some people just have a first name; some people have first and last names and some people have first, middle and last names.

You task is to initialize the middle names (if there is any).

Examples
'Jack Ryan'                   => 'Jack Ryan'
'Lois Mary Lane'              => 'Lois M. Lane'
'Dimitri'                     => 'Dimitri'
'Alice Betty Catherine Davis' => 'Alice B. C. Davis'
*/

// MY SOLUTION
function initializeNames(name) {
  return name.split(" ").length < 3
    ? name
    : name.split(" ")[0] +
        " " +
        name
          .split(" ")
          .slice(1, -1)
          .map(n => n[0].toUpperCase() + ". ").join`` +
        name.split(" ").at(-1);
}

// SOLUTION OF OTHERS
const initializeNames = name => name.replace(/ (\w)\w*(?= )/g, " $1.");
