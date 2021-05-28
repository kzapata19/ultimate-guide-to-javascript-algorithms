/* CHALLENGE
Given a string of text, return true or false indicating whether or not the text is a palindrome.
e.g palindromeChecker('racecar') // will return true
*/



// Using built-in methods toLowerCase, split, reverse, join
// function palindromeChecker(text) {
//     let lowercasedArr = text.toLowerCase().split("");
//     let reversed = lowercasedArr.reverse().join("");
//     return reversed === text;
// }

// Looping through and comparing characters: NOTE that this solution is redundant
// because it continues to compare letters beyond the half-way mark of the text
// function palindromeChecker(text) {
//     let lowercasedArr = text.toLowerCase().split("");
//     return lowercasedArr.every((letter, index) => {
//         return letter === lowercasedArr[text.length - index - 1]
//     })
// }

// OPTIMIZED solution: Using a for loop to eliminate redundancy in solution above
// only loop through half the length of the text
// an odd length palindrome will have matching letters and the middle letter will remain
function palindromeChecker(text) {  
    let textLength = text.length;
    for(let i = 0; i < text.length/2; i++) {
        if(text[i] !== text[textLength - i - 1]) return false
    }
    return true;
}

module.exports = palindromeChecker;

// performance check:
// The optimized solution is the fastest (only iterate through until mid-point)
// The un-optimized iterative solution comes in second, about 47% slower
// The solution using the built-in methods comes in last, about 87% slower