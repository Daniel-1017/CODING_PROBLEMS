function averageString(str) {
  str = str.split(" ");
  const numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  if (!str.length) return "n/a";
  let sum = 0;
  for (var i = 0; i < str.length; i++) {
    const n = str[i];
    if (numbers.indexOf(n) === -1) return "n/a";
    sum += numbers.indexOf(n);
  }
  return numbers[Math.floor(sum / i)];
}

console.log(averageString("zero nine five two"));
