function countConsonants(str) {
  const consonants = new Set(
    str.toLowerCase().match(/[bcdfghjklmnpqrstvwxyz]/g) || []
  );
  return consonants.size;
}
