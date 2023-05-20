function solution(fullText, searchText) {
  const regex = new RegExp(`${searchText}`, "g");
  return fullText.match(regex).length;
}
