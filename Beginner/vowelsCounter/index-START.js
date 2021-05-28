/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/


function vowelsCounter(text) {
    let counter = 0;
    let vowels = ["a", "e", "i", "o", "u"]
    for(let char of text.toLowerCase()) {
        if(vowels.includes(char)) counter++
    }
    return counter;
}



module.exports = vowelsCounter;
