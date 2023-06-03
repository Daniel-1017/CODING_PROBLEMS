/* 
Your Task
Implement a function, which takes a non-negative integer, representing the number of eggs to boil. It must return the time in minutes (integer), which it takes to have all the eggs boiled.

Rules
you can put at most 8 eggs into the pot at once
it takes 5 minutes to boil an egg
we assume, that the water is boiling all the time (no time to heat up)
for simplicity we also don't consider the time it takes to put eggs into the pot or get them out of it
Example (Input --> Output)
0 --> 0
5 --> 5
10 --> 10
*/

// MY SOLUTION
function cookingTime(eggs) {
  if (eggs === 0) return 0;
  let time = 0;
  while (eggs > 8) {
    time += 5;
    eggs -= 8;
  }
  return time + 5;
}

// SOLUTION OF OTHERS
function cookingTime(eggs) {
  return 5 * Math.ceil(eggs / 8);
}
