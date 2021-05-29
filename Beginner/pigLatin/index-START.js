/*
“Pig Latin is a constructed language game in which words in English are altered, 
usually by adding a fabricated suffix or by moving the initial consonant or consonant 
cluster of a word to the end of the word and adding a vocalic syllable to create such a suffix. 
For example, Wikipedia would become ikipediaway (taking the 'W' and 'ay' to create a suffix). 
The objective is to conceal the words from others not familiar with the rules.” - Wikipedia

In this challenge, we will implement a JavaScript function that translates any English word supplied to Pig Latin.

Translate the provided string to Pig Latin by following the rules below:
- For words that begin with consonant sounds, the consonant before the initial vowel should be moved 
to the end of the word sequence and "ay" affixed. 
E.g: "pig" = "igpay"

- For words that begin with consonant clusters, the clusters should be moved to the end of the word 
sequence and "ay" affixed. 
E.g: "glove" = "oveglay"

- For words that begin with vowel sounds, simply add "way" to the end of the word. 
E.g: "explain" = "explainway”
*/

/*
Parameters: one string of text

Return: one string of text, translated into pig Latin

Edge Cases / Examples:
- word starts with one consonant
pigLatin("karen") -> "arenkay"
- word starts with more than one consonant (cluster)
pigLatin("troy") -> "oytray"
- word starts with a vowel
pigLatin("eddie") -> "eddieway"

Pseduocode:
- convert input text to lowercase
- create a list of vowels for reference
- if start of text is a vowel, then remove the vowel to the end and append "way"
- iterate through lowercased text
  - if start of text has more than one consonant, then remove the consonants to the end and append "ay"
  - if start of text has only one consonant, then remove the consonant to the end and append "ay"
- return translated text
*/


// Imperative approach:
// function pigLatin(text) {
//   let vowels = ["a", "e", "i", "o", "u"]
//   let lowerCasedText = text.toLowerCase()
//   let index = 0, consonants = ""
  
//   if(vowels.includes(lowerCasedText[0])) return lowerCasedText + "way"
  
//   while(!vowels.includes(lowerCasedText[index])) {
//     consonants += lowerCasedText[index]
//     index++;
//   }
//   return lowerCasedText.slice(index) + consonants + "ay"
// }

// Declarative approach:
function pigLatin(text) {
  return text
  .replace(/^([aeiou])(._)/, '$1$2way')
  .replace(/^(_[_^aeiou]+)(._)/, '$2$1ay')          

}

console.log(pigLatin("karen"))
console.log(pigLatin("troy"))
console.log(pigLatin("eddie"))

// Performance note:
// The imperative solution is the fastest solution, the declarative is about 88% slower.