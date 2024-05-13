/* 
In this kata you will have to transform each string so that it contains count for every symbol it contains, starting from 2. The order of symbols should be preserved.

Example: abbreviation => a2b2revi2ton
*/

const transform = s => {
  const x = [];
  for (const char of s) {
    if (x.includes(char)) continue;
    const count = [...s].filter(x => x === char).length;
    x.push(char);
    count > 1 && x.push(count);
  }

  return x.join``;
};
