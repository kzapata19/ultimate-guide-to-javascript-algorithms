/* CHALLENGE
Given a two strings, write an algorithm to check if they are anagrams
of each other. Return true if the pass the test and false if they
don't. E.g
    isAnagram('silent', 'listen') // should return true
*/


function createCharMap(string) {
    let charMap = {};
    for(let char of string) {
        //or use hasOwnProperty
        if(!charMap[char]) charMap[char] = 1;
        charMap[char]++
    }
    return charMap;
}

function isAnagram(stringA, stringB) {
   
    if(stringA.length !== stringB.length) return false
    else {
        let strAmap = createCharMap(stringA)
        let strBmap = createCharMap(stringB)
        for(let charIdx in strAmap) {
            if(strAmap[charIdx] !== strBmap[charIdx]) return false
        }
        return true;
    }

}


module.exports = isAnagram