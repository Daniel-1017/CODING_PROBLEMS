/* 
Task: Write a JavaScript function that generates a random username. The username should start with a random adjective, followed by a random noun, and end with a random number between 1 and 100. Each part of the username should be separated by an underscore (_).

Pseudocode:
Generate a random index for each array to pick a random adjective, noun, and number.
Concatenate the selected adjective, noun, and number with underscores between them to form the username.
Return the generated username.

adjectives array is preloaded
*/

const adjectives = ["Quick", "Lazy", "Friendly", "Clever", "Brave"];
const nouns = ["Lion", "Panda", "Fox", "Eagle", "Tiger"];

// Function to generate a random username
function generateRandomUsername() {
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];

  return `${adjective}_${noun}_${number}`;
}
