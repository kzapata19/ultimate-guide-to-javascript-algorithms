/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/

/*
Parameters: one string

Return: one string, the longest word in the input string

Edge Cases/Examples:
longestWord("hi, my name is Bellini") -> "Bellini"
longestWord("what about numbers? This one is large: 1010101010") -> "1010101010"
// if there is a tie, return the first word in the text of the longest length
longestWord("what if there is a tie, karen ?") -> "there"

Pseudocode:
- Split the string into an array of strings using the space as a separator
- Iterate through the text array
    - Keep track of the current longest word's index
    - Keep track of the current longest word's length to compare the next word
    - Update both trackers if the current word is longer than the previous longest word
- Return the longest word
*/


// For-loop solution:
// function longestWord(text) {
//     let wordsArray = text.split(" ");
//     let longestWordInd = 0;
//     let currentLongestWordLen = 0;
//     for(let i = 0; i < wordsArray.length; i++) {
//         let currentLength = wordsArray[i].length;
//         if(currentLength > currentLongestWordLen) {
//             longestWordInd = i;
//             currentLongestWordLen = currentLength;
//         }
//     }
//     return wordsArray[longestWordInd];
// }

// Using reduce:
// function longestWord(text) {
//     let wordsArray = text.split(" ");
//    return wordsArray.reduce((longestWord, currentWord) => {
//     if(currentWord.length > longestWord.length) longestWord = currentWord
//     return longestWord
//    }, "")

// }

// Using sort:
function longestWord(text) {
    let wordsArray = text.split(" ")
    let sortedArray = wordsArray.sort((word1, word2) => word2.length - word1.length)
    console.log(sortedArray)
    return sortedArray[0];
}

module.exports = longestWord

// Performance:
// for-loop and reduce solutions performed the fastest. Solution using sort is approx 83% slower than both methods.