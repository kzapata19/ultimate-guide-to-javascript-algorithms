/* CHALLENGE
Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 
*/



// forEach method:
// function capSentence(text) {
//   let camelCased = ""
//   text.split(" ").forEach(word => camelCased += " " + word[0].toUpperCase() + word.slice(1) )
//   return camelCased.slice(1); //remove the extra space in the beginning
// }

// forEach and splitting and joining combo:
// function capSentence(text) {
//   let words = text.toLowerCase().split(" ") // separate each word into an ind str
//   let capitalized = []
//   words.forEach(word => {
//     capitalized.push(word[0].toUpperCase() + word.slice(1))
//   })
//   return capitalized.join(" "); //empty space is the separator
// }

// Using map and slice:
// function capSentence(text) {
//   return text.toLowerCase().split(" ").map(word => {
//     return word[0].toUpperCase() + word.slice(1)
//   }).join(" ")
// }

// Using map and replace:
function capSentence(text) {
  let wordsArr = text.toLowerCase().split(" ")
  return wordsArr.map(word => {
    return word.replace(word[0], word[0].toUpperCase())
  }).join(" ")
}

module.exports = capSentence

//performance: 
// map/slice is the fastest
// forEach (15% slower)
// map/replace(29% slower)