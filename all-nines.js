/* 
Task
Given any positive integer x ≤ 4000, find the smallest positive integer m such that mx consists of all 9's. Return -1 if no such m exists.

Examples:
allNines(11) -> 9, because 11*9 = 99.

allNines(12) -> -1, because 12 is even, so no multiple of it can be all 9's.

allNines(13) -> 76923, because 13*76923 = 999999, and no smaller positive integer, when multiplied by 13, generates an integer containing only 9's.

NOTE: Although x ≤ 4000, m can be very very LARGE. Where necessary, the way of handling big integers appropriate to the language should be used.
*/

const allNines = x => {
  if (!(x % 2n) || !(x % 5n)) return -1n;
  let i = 9n;

  while (true) {
    if (i % BigInt(x)) {
      i = i * 10n + 9n;
      continue;
    }

    return i / BigInt(x);
  }
};
