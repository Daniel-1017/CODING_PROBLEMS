/* 
3 Hoops Game
Background:
You are making a game that has 3 hoops. There is a red, blue and, green hoop. Whenever you throw a ball into the hoops you get 100 points. and if you get three into a single hoop in a row you get a bonus depending on the color of the hoop. The red hoop gives you 500 bonus points, the blue hoop gives you 300 bonus points, and the green hoop gives you 200 bonus points. Whenever you get a 3 in a row the hoop turns off until you get a 3 in a row inside of another hoop.

Challenge:
Your mission is to write a function prizeCounter that takes in an array of either R, G, B and output the score they would get. Every time they make it into an active hoop they get 100 points. If they were to make it into the same hoop 3 times in a row then they get a bonus based on the color of the hoop. Red = 500   Blue = 300   Green = 200

Whenever you make it into a single hoop 3 times in a row, it then is deactivated and the other hoops are reactivated if they were deactivated.

While deactivated, a hoop will give no points if you make it inside of it, but you will still break your streak.

Instructions:
The function prizeCounter will receive a basic array as its parameter.
Return the score received by the player.
The array will only contain the values ['R', 'G', 'B'].
Examples:
prizeCounter(['R', 'R', 'R', 'R']) 
- output will be 800 because you get 100 from each of the first 3 R then you get the bonus of 500 and it deactivates meaning that the 
- fourth R doesn't give any points so 100 + 100 + 100 + 500 = 800

prizeCounter(['R', 'B', 'G', 'G', 'B', 'B', 'B', 'G', 'B']) 
- output will be 1100 because you get 100 for all of the letters except for the last one so that would be 800 points then you get the bonus from 
- getting a streak of 3 B so add 300 so you have 1100 and since you got the streak that color deactivates and the last one doesn't give any points
*/

const colorPoints = {
    RRR: 500,
    BBB: 300,
    GGG: 200
}

const prizeCounter = (s) => {
    let points = 0, i = 0, deactivatedHoop;
    while (i < s.length) {
        const chunk = s.slice(i, i + 3).join``;

        if (chunk.length === 3 && colorPoints[chunk] && chunk[0] !== deactivatedHoop) {
            points += colorPoints[chunk] + 300;
            deactivatedHoop = chunk[0];
            i += 3;
        } else {
            for (var j = 1; j < chunk.length; j++) {
                const chunk = s.slice(i + j, i + j + 3).join``;

                if (chunk.length === 3 && colorPoints[chunk]) {
                    break;
                }
            }
            for (var k = 0; k < j; k++) {
                if (chunk[k] !== deactivatedHoop) {
                    points += 100;
                }
            }
            i++;
            i += k - 1
        }
    }
    return points;
}