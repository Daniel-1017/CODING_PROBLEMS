/* 
Given a number n, find the number of trailing zeros in its binary representation.

Examples:
4  ->  2, because 4 is represented as 100
5  ->  0, because 5 is represented as 101

Limits:
0 < n <= 10^4
*/

// MY SOLUTION
const trailingZeros = n => {
    for (let i = n.toString(2).length - 1; i >= 0; i--) {
        if (n.toString(2)[i] === "1") return n.toString(2).length - i - 1;
    }
};

// SOLUTION OF OTHERS
function trailingZeros(n) {
    const str = n.toString(2);
    return str.length - 1 - str.lastIndexOf("1");
}
