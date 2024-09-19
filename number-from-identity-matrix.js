/* 
Given the size n of an identity matrix (I), find the number represented by the identity matrix values as its bits.

Examples:
Identity matrix of size 4:
1 0 0 0
0 1 0 0
0 0 1 0
0 0 0 1
should return 33825

Explanation: 1000_0100_0010_0001 -> 33825

Identity matrix of size 2:
1 0
0 1
should return 9

Explanation: 10_01 -> 1x(2^0) + 1x(2^3) = 9

Limits:
0 < n < 65
length code <= 1024
*/

const solve = n => {
    let binary = "";
    for (let i = 0; i < n; i++) {
        const arr = Array(n).fill(0);
        arr[i] = 1;
        binary += arr.join``;
    }

    return BigInt("0b" + binary);
};

console.log(solve(30));
