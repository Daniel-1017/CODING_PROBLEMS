""" 
Description:
Given a two-dimensional matrix (an array of arrays) filled with integers, write a function sumOddNumbers(matrix) that returns the sum of all odd numbers in the matrix.

Function Signature:
python
Copy code
def sumOddNumbers(matrix: List[List[int]]) -> int:
Input:
A 2D list matrix where each element is an integer.
1 <= len(matrix) <= 100 (the number of rows)
1 <= len(matrix[i]) <= 100 (the number of columns in each row)
Output:
Return the sum of all the odd numbers in the matrix.
Example:
python
Copy code
sumOddNumbers([[1, 2, 3], [4, 5, 6], [7, 8, 9]]) 
# returns 25, because 1 + 3 + 5 + 7 + 9 = 25

sumOddNumbers([[2, 4, 6], [8, 10, 12]]) 
# returns 0, because there are no odd numbers
Notes:
The input matrix may contain both positive and negative integers.
Make sure to correctly handle matrices with no odd numbers.
Challenge:
Solve the problem with an optimal time complexity relative to the size of the matrix.

Good luck!
"""

def sumOddNumbers(matrix):
    sum = 0
    for arr in matrix:
        for n in arr:
            if n % 2:
                sum += n
    print(sum)
    return sum