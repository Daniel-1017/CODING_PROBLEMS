/* 
Trigrams are a special case of the n-gram, where n is 3. One trigram is a continuous sequence of 3 chars in phrase.

return all trigrams for the given phrase
replace spaces with underscore (_)
return an empty string for phrases shorter than 3
Example:

"the quick red" --> "the he_ e_q _qu qui uic ick ck_ k_r _re red"
*/

function trigrams( phrase ) {
  const result = []

  for (let i = 0; i < phrase.length - 2; i++) {
    result.push(phrase.slice(i, i + 3).replaceAll(" ", "_"))
  }

  return result.join` `
}