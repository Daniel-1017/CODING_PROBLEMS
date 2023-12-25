/* 
Create a function which compares two probabilities, returning true if the first one is most likely otherwise false.

For this exercise probability is expressed as two numbers separated by a colon e.g. a probability of 1 in 3 will be 1:3.

So:

Input: ('1:3','1:2') - returns false as 1 in 3 is less likely than 1 in 2.
*/

function mostLikely(prob1, prob2) {
  const [n1p1, n2p1] = prob1.split(":"), [n1p2, n2p2] = prob2.split(":")
  return n2p1 / n1p1 < n2p2 / n1p2
}