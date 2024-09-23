/* 
Task
Write a function that checks if two non-negative integers make an "interlocking binary pair".

Interlock ?
numbers can be interlocked if their binary representations have no 1's in the same place
comparisons are made by bit position, starting from right to left (see the examples below)
when representations are of different lengths, the unmatched left-most bits are ignored
Examples
a = 9, b = 4

Stacking representations shows how they can interlock.

 9    1001
 4     100
Here, no 1's share any position, so the function returns true.


a = 3, b = 6

These representations do not interlock.

 3      11
 6     110
Finding they both have a 1 in the same position, the function returns false.

Input
Two non-negative integers.

Output
Boolean true or false whether or not these integers are interlockable.
*/

const interlockable = (a, b) => {
    const binaryA = a
            .toString(2)
            .padStart(
                Math.max(a.toString(2).length, b.toString(2).length),
                " "
            ),
        binaryB = b
            .toString(2)
            .padStart(Math.max(binaryA.length, b.toString(2).length), " ");

    for (let i = binaryA.length; i >= 0; i--)
        if (binaryA[i] === "1" && binaryB[i] === "1") return false;

    return true;
};

console.log(interlockable(3, 6));
