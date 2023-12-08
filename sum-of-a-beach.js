/* 
Beaches are filled with sand, water, fish, and sun. Given a string, calculate how many times the words "Sand", "Water", "Fish", and "Sun" appear without overlapping (regardless of the case).

Examples
sumOfABeach("WAtErSlIde")                    ==>  1
sumOfABeach("GolDeNSanDyWateRyBeaChSuNN")    ==>  3
sumOfABeach("gOfIshsunesunFiSh")             ==>  4 
sumOfABeach("cItYTowNcARShoW")               ==>  0
*/

function sumOfABeach(beach) {
  const words = ["Sand", "Water", "Fish", "Sun"];
  let count = 0;

  let i = 0;
  while (i < beach.length) {
    for (const word of words) {
      const section = beach.slice(i, i + word.length).toLowerCase();
      if (word.toLowerCase() === section) {
        count++;
        i += word.length - 1;
        continue;
      }
    }

    i++;
  }

  return count;
}
