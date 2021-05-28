/* CHALLENGE
Given a string of text, return true or false indicating whether or not the text is a palindrome.
e.g palindromeChecker('racecar') // will return true
*/




function palindromeChecker(text) {
    let lowercasedArr = text.toLowerCase().split("");
    let reversed = lowercasedArr.reverse().join("");
    return reversed === text;
}



module.exports = palindromeChecker;