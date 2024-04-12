/* 
You are having a BBQ, after the BBQ you are left with the rubbish. You have 3 recycling boxes:

Red: Plastics, Green: Glass, Blue: Card.

You will need to sort the rubbish according to the material and return the number of items in each box in the form of an array i.e [2,3,4] where 2 is the number of plastic items, 3 is the number of glass items and 4 is the number of card items. assume:

Plastics > 0, Glass < 0, Card = 0
*/

const recycleMe = recycle => {
    let foundPlastic = 0,
        foundGlass = 0,
        foundCard = 0;

    // Solution 1
    for (const rubbish of recycle) {
        if (rubbish > 0) foundPlastic++;
        else if (rubbish < 0) foundGlass++;
        else foundCard++;
    }

    // Solution 2
    // const foundPlastic = recycle.filter(rubbish => rubbish > 0).length,
    // foundGlass = recycle.filter(rubbish => rubbish < 0).length,
    // foundCard = recycle.filter(rubbish => 0 === rubbish).length;

    return [foundPlastic, foundGlass, foundCard];
};
