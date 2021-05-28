/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/



// function reverseString(text) {
//     // return text.split("").reverse().join("")
//     // using ES6 spread operator:
//     return [...text].reverse().join("")
// }

// function reverseString(text) {
//     let result = ""
//     for(let i = text.length - 1; i >= 0; i--) {
//         result += text[i]
//     }
//     return result;
// }

// We can also use for in loop (though will need to reference the index for the character: text[index])
// Using the for of loop enables us to select the char without referencing the index
// function reverseString(text) {
//     let result = ""
//     for (char of text) {
//         result = char + result;
//     }
//     return result;
// } 

// Recursive solution
// function reverseString(text) {
//     // terminal case
//     if(text === "") return ""
//     else return reverseString(text.substr(1)) + text[0];
// }

// Using reduce
function reverseString(text) {
    // return text.split("").reduce((result, char) => char + result, "")
    // using the spread operator:
    return [...text].reduce((result, char) => char + result, "")
}



module.exports = reverseString