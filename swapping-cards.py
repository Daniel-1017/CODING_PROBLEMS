""" 
Two players draw a pair of numbered cards so that both players can form a 2 digit number. A winner can be decided if one player's number is larger than the other.

However, there is a rule where a player can swap any one of their cards with any one of the other player's cards in a gamble to get a higher number! Note that it is illegal to swap the order of your own cards. That means if you draw a 1 then a 9, you cannot swap them to get 91.

Numbered Cards

Paul's strategy is to always swap his lowest number with the opponent's ten's digit. Return whether this results in Paul winning the round.

n1 is Paul's number
n2 is his opponent's number
Worked Example
(41, 79) ➞ true
# Paul's lowest number is 1
# The opponent's ten's digit is 7
# After the swap: 47 > 19
# Paul wins the round
Examples
(41, 98) ➞ true

(12, 28) ➞ true

(67, 53) ➞ false

(77, 54) ➞ false
Notes
If both of Paul's digits are the same, swap the ten's digit with the opponent's (paul likes to live riskily).
The cards don't include the number 0.
11 <= All numbers <= 99 (excluding numbers containing 0)
"""

# MY SOLUTION
def swap_cards(n1, n2):
    n1 = str(n1)
    n2 = str(n2)
    
    dig1N1 = n1[0]
    dig2N1 = n1[1]

    dig1N2 = n2[0]
    dig2N2 = n2[1]

    winnerIsPaul = False

    if dig1N1 == dig2N1:
        temp = dig1N2
        dig1N2 = dig1N1
        dig1N1 = temp
        winnerIsPaul = int(dig1N1 + dig2N1) > int(dig1N2 + dig2N2)
    else:
        paulsLowetN = dig1N1
        paulsHighestN = dig2N1
        if paulsLowetN > dig2N1:
            paulsLowetN = dig2N1
            paulsHighestN = dig1N1

        print(paulsHighestN, paulsLowetN)

        temp = dig1N2
        dig1N2 = paulsLowetN
        
        if paulsLowetN == dig1N1:
            dig1N1 = temp
        else:
            dig2N1 = temp
        
        winnerIsPaul = int(dig1N1 + dig2N1) > int(dig1N2 + dig2N2)
    
    if winnerIsPaul:
        return True
    else:
        return False

# SOLUTION OF OTERS
def swap_cards(a,b):
    p, q = a // 10, a % 10
    r, s = b // 10, b % 10
    return p > q or (r,q) > (p,s)