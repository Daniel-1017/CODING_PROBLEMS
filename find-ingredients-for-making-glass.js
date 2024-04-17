/* 
Inspired by visiting the island Murano, where famous glass makers producing their masterpieces.

The first known recipe of glass components is from the library of the Assyrian king Assurbanipal handed down to about 650 BC. Date.

"Take 60 pieces of sand, 180 pieces of seaweed ash and 5 pieces of chalk, and you will receive glass."

Your task is to find out the other pieces for missing ingredients. Per function call only one ingredient is given, all others are 0.

Example:

createIngredients(0,180) should return "[60.00;180.00;5.00]"
createIngredients(100) should return "[100.00;300.00;8.33]"
Negative pieces are not allowed return "";
Note: Have fun coding it and please don't forget to vote and rank this kata!
*/

const createIngredients = (...ingredients) => {
    const [sand, seaweed, chalk] = ingredients;
    const quotient = sand ? sand / 60 : seaweed ? seaweed / 180 : chalk / 5;
    return `[${[60, 180, 5].map(qty => (qty * quotient).toFixed(2)).join(";")}]`;
};