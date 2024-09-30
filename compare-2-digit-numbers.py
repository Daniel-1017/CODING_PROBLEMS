""" 
You are given 2 two-digit numbers. You should check if they are similar by comparing their numbers, and return the result in %.

Example:

compare(13,14)=50%;
compare(23,22)=50%;
compare(15,51)=100%;
compare(12,34)=0%.
"""

# MY SOLUTION
def compare(a, b):
    count = []

    if a == b:
        return "100%"

    for n in str(a):
        if n in str(b) and n not in count:
            count.append(n)

    for n in str(b):
        if n in str(a) and n not in count:
            count.append(n)

    if not len(count):
        return "0%"

    return "100%" if len(count) > 1 else "50%"

# SOLUTION OF OTHERS
def compare(a, b):
    fir = sorted(str(a))
    sec = sorted(str(b))
    return '100%' if fir == sec else '50%' if fir[0] in sec or fir[1] in sec else '0%'