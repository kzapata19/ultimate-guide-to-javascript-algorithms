/* CHALLENGE
Given a string of text, find and return the most recurring character. 
e.g maxRecurringChar('aabacada') // will return 'a'
*/

// Keep track of every string character and the number of times it occurs (character mapping). Using the map, we can then determine which character
// occurs the most frequently.

// Iterative solution using a 'for of' loop

// One main difference between a 'for of' loop and a 'for in' loop is that:
// the "of" loop will iterate through the values that the iterable object defines to be iterated over (in order of the collection)
// An object is said to be iterable if it defines its iteration behavior such as what values are looped over a for or loop. 
// In order to be iterable, an object must implement the @@iterator method. The object (or one of the objects up its prototype chain) mush have a property with a Symbol.iterator key
// Examples: Arrays, Maps, Strings, Set, and array-like objects (arguments or NodeList) 

// the "in" loop will iterate over the enumerable properties of the object (in random order)

function maxRecurringChar(text) {
    let charMap = {}
    let maxOccurrences = 0
    let maxChar;
    for (let char of text) {
        // if(charMap.hasOwnProperty(char)) charMap[char]++;
        // else charMap[char] = 1;
        if(!charMap[char]) charMap[char] = 1;
        else charMap[char]++;
    }
    for (let char in charMap) {
        if(charMap[char] > maxOccurrences) {
            maxOccurrences = charMap[char]
            maxChar = char;
        }
    }
    return maxChar;
}



module.exports = maxRecurringChar;