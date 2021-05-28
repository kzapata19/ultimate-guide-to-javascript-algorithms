/* CHALLENGE
Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 
*/



// forEach method:

function capSentence(text) {
  let camelCased = ""
  text.split(" ").forEach(word => camelCased += " " + word[0].toUpperCase() + word.slice(1) )
  return camelCased.slice(1); //remove the extra space in the beginning
}


console.log(capSentence("hi my name is karen"))
module.exports = capSentence
