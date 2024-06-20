/* 
Given an array of strings, sort the array into order of weight from light to heavy.

Weight units are grams(G), kilo-grams(KG) and tonnes(T).

Arrays will always contain correct and positive values aswell as uppercase letters.
*/

const determinateWeightUnit = weight => {
  if (weight[weight.length - 1] === "T") return "T";
  if (weight[weight.length - 2] === "K") return "KG";
  return "G";
};

const convertToG = weight => {
  const weightUnit = determinateWeightUnit(weight);

  if (weightUnit === "T") return parseFloat(weight) * 1_000_000;
  if (weightUnit === "KG") return parseFloat(weight) * 1000;
  return parseInt(weight);
};

const arrange = arr => arr.sort((a, b) => convertToG(a) - convertToG(b));
