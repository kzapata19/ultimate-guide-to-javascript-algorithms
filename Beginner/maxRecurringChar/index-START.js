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

// the "in" loop will iterate over the enumerable properties of the object (in random order). This includes properties in the Prototype chain.
// Thus you must check that the property belongs to the object with the hasOwnProperty method. 

// function maxRecurringChar(text) {
//     let charMap = {}
//     let maxOccurrences = 0
//     let maxChar;
//     for (let char of text) {
//         // if(charMap.hasOwnProperty(char)) charMap[char]++;
//         // else charMap[char] = 1;
//         if(!charMap[char]) charMap[char] = 1;
//         else charMap[char]++;
//     }
//     for (let char in charMap) {
//         if(charMap[char] > maxOccurrences) {
//             maxOccurrences = charMap[char]
//             maxChar = char;
//         }
//     }
//     return maxChar;
// }

// Creating arrays from the character map
// Object.keys method will create an array with the keys listed in the order a normal loop would iterate through them
// Object.values method will create an array with the values listed in the same order as a 'for in' loop would iterate through them
function maxRecurringChar(text) {
    let charMap = {}
    let charArray = []
    let valuesArray = []
    let maxCharValue = 0

    for(let char of text) {
        if(charMap.hasOwnProperty(char)) charMap[char]++
        else charMap[char] = 1
    }
    charArray = Object.keys(charMap)
    valuesArray = Object.values(charMap)
    maxCharValue = Math.max(...valuesArray)

    return charArray[valuesArray.indexOf(maxCharValue)]
}

// The For...in iteration is the fastest with the Arrays method coming in second by about 30%
// Application: this can be used for at a more advanced level in SEO to determine the keyword density in content

module.exports = maxRecurringChar;