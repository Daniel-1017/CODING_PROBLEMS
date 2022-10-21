// how many times does the short string repeat in the long string

// MY SOLUTION
function naiveStringSearch(string, shortString) {
  let stringCount = 0;
  for (let i = 0; i < string.length - shortString.length + 1; i++) {
    let word = "";
    for (let j = 0; j < shortString.length; j++) {
      if (string[i + j] === shortString[j]) {
        word += string[i + j];
      }
    }

    if (word === shortString) {
      stringCount++;
      word = "";
    }
  }

  return stringCount;
}
naiveStringSearch("HELLO_WORLD - hello_world", "HELLO_WORLD"); // 1

// SOLUTION OF OTHERS
function naiveStringSearch(long, short) {
  let count = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) break;
      if (j === short.length - 1) count++;
    }
  }

  return count;
}

naiveStringSearch("HELLO_WORLD - hello_world", "HELLO_WORLD"); // 1
