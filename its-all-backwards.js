/* 
I give you this: ['This', 'Is', 'a' 'Example');

You give me back this: 'examplE a iS thiS'

So. I want what I give you back in reverse order, with only the last letter of each item capitalized. If the item is a single letter word and not capitilized when I give it to you, do not capitalize it.
*/

const flipper = stringArr => {
  if (stringArr.length === 1) {
    let [word] = stringArr
    word = word.split("").reverse().join``
    return word.slice(0, -1).toLowerCase() + word[word.length-1].toUpperCase()
  }
  return stringArr.reverse().map(word => {
    if (word.length === 1) return word
    return word.slice(0, -1).toLowerCase() + word[word.length-1].toUpperCase()
  }).join` `
}