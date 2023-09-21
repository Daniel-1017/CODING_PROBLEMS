function maxGap(numbers) {
  let gap = 0;
  for (let i = 0; i < numbers.length - 1; i++) {
    const g = Math.abs(numbers[i] - numbers[i + 1]);
    if (g > gap) gap = g;
  }
  return gap;
}
