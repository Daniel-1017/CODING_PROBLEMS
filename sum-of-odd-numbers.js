/*
Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8
*/

function calcOddSum(limit) {
    return Math.ceil(limit / 2) ** 2;
}

function rowSumOddNumbers(n) {
    let firstOddInRow = n * (n - 1) + 1;
    return calcOddSum(firstOddInRow + ((n * 2) - 1)) - calcOddSum(firstOddInRow - 2);
}