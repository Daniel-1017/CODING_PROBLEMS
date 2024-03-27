/* 
Thanks for checking out my kata - in the below problem - the highest n can be is 200.

Example summation of a number - summation of the number 5 1+2+3+4+5 = 15 summation of the number 6 1+2+3+4+5+6 = 21

You are sat with two frogs on a log, Chris and Tom. They are arguing about who ate the most flies (Poor flies, but what you going to do!). Chris says "I ate the summation of n number of flies!".

Tom replies "Take half the number you ate then round it down and work out the summation of that, that is how many I ate"!

Cat then hops onto the log looking pleased with herself "Well, I ate the summation of both your dinners combined." Loz who came late to this meeting of amphibians is very confused, he asks "So how many did each of you eat?"

Write a function called frogContest which returns a string "Chris ate {number} flies, Tom ate {number} flies and Cat ate {number} flies"

{number} is the integer value of the amount of flies eaten by each.
*/

/**
 * Calculates the number of flies eaten by Chris, Tom, and Cat in a frog contest.
 * 
 * @param {number} n - The number of frogs in the contest.
 * @returns {string} - A string describing the number of flies eaten by each participant.
 */
const frogContest = n => {
    const getSummation = n => (n * (n + 1)) / 2;

    const chrisSummation = getSummation(n);
    const tomsSummation = getSummation(Math.floor(chrisSummation / 2));
    const catsSummation = getSummation(chrisSummation + tomsSummation);

    return `Chris ate ${chrisSummation} flies, Tom ate ${tomsSummation} flies and Cat ate ${catsSummation} flies`;
};

frogContest(10);