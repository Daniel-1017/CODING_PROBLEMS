/* 
Input:
A string sentence which contains multiple words separated by spaces. The sentence will contain only alphabetic characters and spaces, with no punctuation.
Output:
Return the longest word from the sentence. If multiple words have the same length, return the first one.
Notes:
Assume that the input string will always have at least one word.
You can assume that words are separated by a single space.
*/

function findLongestWord(sentence) {
    const words = sentence.split(" ");
    let longest = words[0];

    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }

    return longest;
}
