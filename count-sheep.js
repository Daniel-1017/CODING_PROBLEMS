const countSheep = (num) => {
  let sheeps = "";
  for (let i = 1; i <= num; i++) {
    sheeps = sheeps.concat(`${i} sheep...`);
  }

  return sheeps;
};
