/* 
Given two binary strings a and b, return their sum as a binary string.

 

Example 1:

Input: a = "11", b = "1"
Output: "100"
Example 2:

Input: a = "1010", b = "1011"
Output: "10101"
 

Constraints:

1 <= a.length, b.length <= 104
a and b consist only of '0' or '1' characters.
Each string does not contain leading zeros except for the zero itself.
*/

function trimLeadingZeros(s) {
    let firstOne = s.indexOf("1");
    return firstOne === -1 ? "0" : s.substring(firstOne);
}

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
function addBinary(s1, s2) {
    s1 = trimLeadingZeros(s1);
    s2 = trimLeadingZeros(s2);

    let n = s1.length;
    let m = s2.length;

    if (n < m) {
        return addBinary(s2, s1);
    }

    let j = m - 1;
    let carry = 0;
    let result = [];

    for (let i = n - 1; i >= 0; i--) {
        let bit1 = s1[i] - "0";
        let sum = bit1 + carry;

        if (j >= 0) {
            let bit2 = s2[j] - "0";
            sum += bit2;
            j--;
        }

        let bit = sum % 2;
        carry = Math.floor(sum / 2);

        result.push(bit);
    }

    if (carry > 0) {
        result.push(1);
    }

    return result.reverse().join("");
}
