/* CHALLENGE
Given two strings of equal length, calculate and return the the hamming distance.
E.g hammingDistance('rover', 'river') // should return 1
*/

/*
Parameters: two strings of same length
- will probably need to be transformed to all lowercase/uppercase before comparing characters

Return: one integer representing the hamming distance of the two strings

Edge Cases/Examples:
two strings:
hammingDistance("hello", "hells") -> 1

numbers:
hammingDistance("10108", "10119") -> 3

Pseudocode:
- Convert the two input strings to lowercase 
- Iterate through both strings simultaneously
- Compare characters with the same index
    - If they are different, increment the distance counter
- Return distance counter
*/


function hammingDistance(stringA, stringB) {
    let distance = 0
    let strALowerCased = stringA.toLowerCase()
    let strBLowerCased = stringB.toLowerCase()

    if (stringA.length !== stringB.length) throw new Error('Strings do no have equal length')
    else {
        for(let i = 0; i < stringA.length; i++) {
            if(strALowerCased[i] !== strBLowerCased[i]) distance++;
        }
        return distance;
    }

}



module.exports = hammingDistance

// Application: The hamming distance algorithm can be used in telecommunication for
// error detection and correction. It is used to determine the number of distorted bits
// in a binary word as a way to estimate error. In biology, it is also used to determine 
// genetic distance