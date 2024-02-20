/* 
You are in charge of handling a series of bets based on coin flips, write a script that accepts the following params:

probHeads: an array containing the win multiplier for Heads and the amount of money currently on Heads

probTails: an array containing the win multiplier for Tails and the amount of money currently on Tails

outcome: a string, either "Heads" or "Tails" that represents the winning bet

and return the proper string out of these 3:

"The outcome is [X], In total I have to pay [Y]$ to the winner, I broke even!"
"The outcome is [X], In total I have to pay [Y]$ to the winner, of which [Z]$ from my own pockets :("
"The outcome is [X], In total I have to pay [Y]$ to the winner, I have pocketed [Z]$ !"
you pocket all the money in the losing side of the bet, but have to pay out all the money in the winning side multiplied by the multiplier.

All numbers should be printed with 2 decimal values, for example:

10.00$
5.35$
945.10$
*/

function calculatePayout(probHeads, probTails, outcome) {
  let winningMultiplier, winningAmount, losingMultiplier, losingAmount;

  if (outcome === "Heads") {
      [winningMultiplier, winningAmount] = probHeads;
      [losingMultiplier, losingAmount] = probTails;
  } else {
      [winningMultiplier, winningAmount] = probTails;
      [losingMultiplier, losingAmount] = probHeads;
  }

  const totalPayment = winningMultiplier * winningAmount;
  const pocketedAmount = losingAmount;

  if (totalPayment === pocketedAmount) {
      return `The outcome is ${outcome}, In total I have to pay ${totalPayment.toFixed(2)}$ to the winner, I broke even!`;
  } else if (totalPayment > pocketedAmount) {
      const amountFromPockets = (totalPayment - pocketedAmount).toFixed(2);
      return `The outcome is ${outcome}, In total I have to pay ${totalPayment.toFixed(2)}$ to the winner, of which ${amountFromPockets}$ from my own pockets :(`;
  } else {
      const amountPocketed = (pocketedAmount - totalPayment).toFixed(2);
      return `The outcome is ${outcome}, In total I have to pay ${totalPayment.toFixed(2)}$ to the winner, I have pocketed ${amountPocketed}$ !`;
  }
}