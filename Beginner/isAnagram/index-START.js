/* CHALLENGE
Given a two strings, write an algorithm to check if they are anagrams
of each other. Return true if the pass the test and false if they
don't. E.g
    isAnagram('silent', 'listen') // should return true
*/

// Solution using helper fx to generate character map and for..in loop
// function createCharMap(string) {
//     let charMap = {};
//     for(let char of string) {
//         //or use hasOwnProperty
//         if(!charMap[char]) charMap[char] = 1;
//         charMap[char]++
//     }
//     return charMap;
// }

// function isAnagram(stringA, stringB) {
   
//     if(stringA.length !== stringB.length) return false
//     else {
//         let strAmap = createCharMap(stringA)
//         let strBmap = createCharMap(stringB)
//         for(let charIdx in strAmap) {
//             if(strAmap[charIdx] !== strBmap[charIdx]) return false
//         }
//         return true;
//     }

// }

// Direct comparison:
function sanitize(string) {
    return string.toLowerCase().replace(/[^a-z\d]/g, "").split("").sort().join("")
};

function isAnagram(stringA, stringB) {
    let strAsanitized = sanitize(stringA)
    let strBsanitized = sanitize(stringB)
    for(let letter in strAsanitized) {
        if(strAsanitized[letter] !== strBsanitized[letter]) return false;
    }
    return true;
}

module.exports = isAnagram

// Performance note:
// The solution using the character maps is faster than the direct comparison using the sanitize helper fx (slower by approx. 52%)