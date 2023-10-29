/* 
You will get an array of numbers.

Every preceding number is smaller than the one following it.

Some numbers will be missing, for instance:

[-3,-2,1,5] //missing numbers are: -1,0,2,3,4
Your task is to return an array of those missing numbers:

[-1,0,2,3,4]
*/

const findMissingNumbers = arr => {
  const res = []
  for (let i = Math.min(...arr), j = 0; i < Math.max(...arr); i++, j++) {
    if (!arr.includes(i)) res.push(i)
  }
  return res
}
