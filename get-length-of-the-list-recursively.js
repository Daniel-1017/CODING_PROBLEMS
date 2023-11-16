/* 
Write function lenR which returns the length of a given list. Try no to cheat and provide recursive solution.
*/

const lenR = ([head, ...tail]) => {
  if (!head) return 0;
  return 1 + lenR(tail);
};
