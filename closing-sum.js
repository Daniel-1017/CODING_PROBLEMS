/* 
Create a function that returns the sum of the digits formed from the first and last digits, all the way to the center of the number.

Worked Example
2520 ➞ 72

# The first and last digits are 2 and 0.
# 2 and 0 form 20.
# The second digit is 5 and the second to last digit is 2.
# 5 and 2 form 52.

# 20 + 52 = 72
Examples
121 ➞ 13
# 11 + 2

1039 ➞ 22
# 19 + 3

22225555 ➞ 100
# 25 + 25 + 25 + 25
Notes
If the number has an odd number of digits, simply add on the single-digit number in the center (see example #1).
Any number which is zero-padded counts as a single digit (see example #2).
*/

const closingInSum = (_,n=_+"") => {
    const part1 = n.slice(0, Math.ceil(n.length / 2)), part2 = n.slice(Math.ceil(n.length / 2));
    let sum = 0;

    for (let i = 0; i < part1.length; i++) {
        sum += +(part1[i] + (part2[i] ? part2[part2.length - i - 1] : ""));
    }

    return sum;
};

console.log(closingInSum(5));