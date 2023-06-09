/* 
You are working at a lower league football stadium and you've been tasked with automating the scoreboard.

The referee will shout out the score, you have already set up the voice recognition module which turns the ref's voice into a string, but the spoken score needs to be converted into a pair for the scoreboard!

e.g. "The score is four nil" should return [4,0]

Either teams score has a range of 0-9, and the ref won't say the same string every time e.g.

"new score: two three"
  
"two two"
  
"Arsenal just conceded another goal, two nil"

Note:
Please return an array
*/

function scoreboard(string) {
  const arr = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  const score = string.match(
    /zero|one|two|three|four|five|six|seven|eight|nine/gi
  );
  if (score.length === 1) return [arr.indexOf(score[0]), 0];
  return [arr.indexOf(score[0]), arr.indexOf(score[1])];
}
console.log(scoreboard("The score is four nil"));
