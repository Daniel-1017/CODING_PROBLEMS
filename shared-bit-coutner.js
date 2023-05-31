function sharedBits(a, b) {
  const bitsA = a.toString(2).padStart(4, "0");
  const bitsB = b.toString(2).padStart(4, "0");
  let count = 0;

  for (let i = 0; i < Math.abs(bitsA.length, bitsB.length); i++) {
    if (bitsA[i] == 1 && bitsB[i] == 1) count++;
    if (count > 1) return true;
  }
  return false;
}
