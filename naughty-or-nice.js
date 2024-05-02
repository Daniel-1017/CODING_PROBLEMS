/* 
In this kata, you will write a function that receives an array of string and returns a string that is either 'naughty' or 'nice'. Strings that start with the letters b, f, or k are naughty. Strings that start with the letters g, s, or n are nice. Other strings are neither naughty nor nice.

If there is an equal amount of bad and good actions, return 'naughty'

Examples:

bad_actions = ['broke someone\'s window', 'fought over a toaster', 'killed a bug']
whatListAmIOn(bad_actions)
#-> 'naughty'
good_actions = ['got someone a new car', 'saved a man from drowning', 'never got into a fight']
what_list_am_i_on(good_actions)
#-> 'nice'
actions = ['broke a vending machine', 'never got into a fight', 'tied someone\'s shoes']
what_list_am_i_on(actions)
#-> 'naughty'
*/

// MY SOLUTION
const whatListAmIOn = actions => {
  const bad = ["b", "f", "k"], good = ["g", "s", "n"];

  let badCount = 0, goodCount = 0;

  for (const action of actions) {
    if (bad.includes(action[0])) badCount++;
    else if (good.includes(action[0])) goodCount++;
  }

  return badCount >= goodCount ? "naughty" : "nice";
}

// SOLUTION OF OTHERS
const whatListAmIOn = actions => actions.reduce((pre, val) => pre + /^[gsn]/.test(val) - /^[bfk]/.test(val), 0) > 0 ? `nice` : `naughty`;