/* 
In this Kata, you should implement a function, that takes integer in range [0..255] (8 bits), and returns combination of pits and lands that encode the number. Result should have format of string: PLLPL... where P represents pit and L represents land. Combination should always start with pit. Numbers should be encoded in little-endian, which means you start from least significant bit.

Example
Input: 5

Binary representation (8 bits): 00000101

Output: PLLPPPPPP

Explanation:

Starts from P as per description
Changes to L because first bit is 1
Stays L because second bit is 0
Changes to P because third bit is 1
Stays P because fourth bit is 0
Stays P till the end because all subsequent bits are 0
*/

const encodeCD = n => {
    const binary = n.toString(2).padStart(8, "0");

    let output = "P";

    for (let i = binary.length - 1; i >= 0; i--) {
        if (binary[i] === "1")
            output += output[output.length - 1] === "P" ? "L" : "P";
        else output += output[output.length - 1];
    }

    return output;
};
