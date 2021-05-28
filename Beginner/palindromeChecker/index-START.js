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

// Looping through and comparing characters:
function palindromeChecker(text) {
    let lowercasedArr = text.toLowerCase().split("");
    return lowercasedArr.every((letter, index) => {
        return letter === lowercasedArr[text.length - index - 1]
    })
}



module.exports = palindromeChecker;