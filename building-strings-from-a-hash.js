function solution(pairs) {
  return [...Object.keys(pairs)]
    .map(key => `${key} = ${pairs[key]},`)
    .join("")
    .slice(0, -1);
}
