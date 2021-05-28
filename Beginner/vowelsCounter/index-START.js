/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/

// Iterative solution using the 'for of' loop and native includes method
// function vowelsCounter(text) {
//     let counter = 0;
//     let vowels = ["a", "e", "i", "o", "u"]
//     for(let char of text.toLowerCase()) {
//         if(vowels.includes(char)) counter++
//     }
//     return counter;
// }

// RegEx solution
function vowelsCounter(text) {
    // define target chars to match and perform a global (g) search of the text and return all matches (not just first match) 
    // the search is case insensitive (i)
    let matched = text.match(/[aeiou]/gi) 
    return matched.length || 0
}

module.exports = vowelsCounter;
