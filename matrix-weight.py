""" 
A matrix is "fat" when the sum of the roots of its "Widths" is greater than the sum of the roots of its "Heights". Otherwise, we call it as a "thin" matrix.

But what is the meaning of that?

A Width of a matrix is the sum of all the elements in a row.

Similarly, a Height of a matrix is the sum of all the elements in a column.

Difficult to assimilate? Let's look at an example.

The matrix [ [1, 3] , [5, 7] ] :

  - Sum of rooted Widths: √(1+3) + √(5+7) = √4 + √12
  - Sum of rooted Heights: √(1+5) + √(3+7) = √6 + √10
  
Since "width" is smaller than "height", we determine this matrix is "thin".

The matrix [ [1, 4, 7], [2, 5, 8], [3, 6, 9] ] :

  - Sum of rooted Widths:√(1+4+7) + √(2+5+8) + √(3+6+9)  = √12 + √15 + √18  = 11.57972565...
  - Sum of rooted Heights: √(1+2+3) + √(4+5+6) + √(7+8+9) = √6 + √15 + √24 = 11.22145257...
  
Since "height" is smaller than "width", we determine this matrix is "fat".
TASK: Your task is to return "thin", "fat" or "perfect" depending on the results obtained.

NOTES:

All matrices will be squared

In case that both sums are equal, the matrix will be considered as "perfect".

DON'T round the roots... every digit matters ;)

Since the results of the roots may have a slight variation, to determine that a matrix is "perfect", I suggest you use an approximate error of 1E- 10.

If a Width or a Height is negative, return None
"""

import math

TOLERANCE = 1e-10

def get_matrix_width(matrix):
    width = 0
    for row in matrix:
        row_width = 0
        has_negative = False
        for n in row:
            row_width += n
            if n < 0:
                has_negative = True
                break
        if has_negative:
            return None
        width += math.sqrt(row_width)
    return width

def get_matrix_height(matrix):
    height = 0
    for i, _ in enumerate(matrix):
        row_height = 0
        has_negative = False
        for row in matrix:
            row_height += row[i]
            if row[i] < 0:
                has_negative = True
                break
        if has_negative:
            return None
        
        height += math.sqrt(row_height)
    return height

def thin_or_fat(matrix):
    matrix_width = get_matrix_width(matrix)
    matrix_height = get_matrix_height(matrix)

    if not matrix_width or not matrix_height:
        return None

    is_close = math.isclose(matrix_width, matrix_height, rel_tol=TOLERANCE)
    
    if is_close:
        return "perfect"
    elif matrix_width > matrix_height:
        return "fat"

    return "thin"

