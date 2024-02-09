/* 
You are given a String of one or more words. Your task is to check the length of each word and if it's less than 4, you keep it unmodified otherwise you find out the first vowel which is coming after 3-rd character and replace vowel and rest of word with a dot. Finally, you should return the same string but shorten (only if the length of words is more then 3 characters).

shortenSpeech( "Hello do you want a coffee" ) => returns "Hell. do you want a coff.?"

shortenSpeech( "Hey fellow warriors" ) => returns "Hey fell. warr."

shortenSpeech( "This is a test") => returns "This is a test"
*/

const shortenSpeech = (str) => {	 
  return str.split(" ").map(word => {
    if (word.length < 5) return word

    for (var i = 3; i < word.length; i++) if ("aeiou".includes(word[i])) break

    return word.slice(0, i).padEnd(word.length, ".")
  }).join` `
}