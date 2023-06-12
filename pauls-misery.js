/* 
Paul is an excellent coder and sits high on the CW leaderboard. He solves kata like a banshee but would also like to lead a normal life, with other activities. But he just can't stop solving all the kata!!

Given an array (x) you need to calculate the Paul Misery Score. The values are worth the following points:

kata = 5
Petes kata = 10
life = 0
eating = 1
The Misery Score is the total points gained from the array. Once you have the total, return as follows:

< 40 = 'Super happy!'
< 70 >= 40 = 'Happy!'
< 100 >= 70 = 'Sad!'
> 100 = 'Miserable!'
*/

function paul(x) {
  const activities = {
    kata: 5,
    "Petes kata": 10,
    life: 0,
    eating: 1,
  };
  const miseryScore = x.reduce((acc, val) => acc + activities[val], 0);
  return miseryScore < 40
    ? "Super happy!"
    : miseryScore < 70
    ? "Happy!"
    : miseryScore < 100
    ? "Sad!"
    : "Miserable!";
}
paul(["life", "eating", "life"]);
