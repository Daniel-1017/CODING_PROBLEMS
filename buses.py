# Description:

"""
To get to the health camp, the organizers decided to order buses. It is known that some children kids and adults adults are going to go to the camp. Each bus has a certain number of seats places. There must be at least two adults on each bus in which children will travel.

Determine whether it will be possible to send all children and adults to the camp, and if so, what is the minimum number of buses required to order for this.

Input data:

arguments kids, adults, places each of them does not exceed 10,000.

Output data:

We need to return the number of buses that need to be ordered. If it is impossible to send everyone to the camp, return 0

kids=10, adults=4, places=7 --> 2 (2 buses, both seating 2 adults & 5 kids)
kids=10, adults=4, places=5 --> 0 (impossible to send everyone to the camp)

Happy coding :)
"""

import math

# MY SOLUTION
def buses(kids, adults, places):
    if places == 0:
        return 0

    busses_needed = math.ceil((kids + adults) / places)

    if kids == 0:
        return busses_needed

    if busses_needed * 2 > adults:
        return 0

    return busses_needed

# SOLUTION OF OTHERS
def buses(kids, adults, places):
    if places == 0: return 0
    buses_by_people = math.ceil((kids + adults) / places)
    if adults < (buses_by_people * 2) and kids > 0:
        return 0
    else:
        return buses_by_people