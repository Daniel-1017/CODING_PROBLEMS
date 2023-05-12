/* 
One suggestion to build a satisfactory password is to start with a memorable phrase or sentence and make a password by extracting the first letter of each word.

Even better is to replace some of those letters with numbers (e.g., the letter O can be replaced with the number 0):

instead of including i or I put the number 1 in the password;
instead of including o or O put the number 0 in the password;
instead of including s or S put the number 5 in the password.
Examples:
"Give me liberty or give me death"  --> "Gml0gmd"
"Keep Calm and Carry On"            --> "KCaC0"
*/

function makePassword(phrase) {
  const password = phrase.split(" ").map(word => word[0]);
  for (let i = 0; i < password.length; i++) {
    if (password[i] === "i" || password[i] === "I") password[i] = "1";
    else if (password[i] === "o" || password[i] === "O") password[i] = "0";
    else if (password[i] === "s" || password[i] === "S") password[i] = "5";
  }
  return password.join``;
}

makePassword();
