/*
The "Search and Replace" functionality is very common within word processing applications used for creating notes, 
documents and things of that nature. In this challenge, we implement this functionality in JavaScript in two distinct ways.

Receiving a sentence, a word in the sentence and a replacement for that word as arguments, 
perform a search and replace on the sentence using the arguments provided and return the new sentence.

searchReplace("He is Sleeping on the couch", "Sleeping", "sitting") 
// should return "He is Sitting on the couch"

Note: Make sure to match the casing(capitalization) of the string to be replaced as shown above.
*/

// Solution using replace:
function searchReplace(str, word, newWord) {
  if(word[0] === word[0].toUpperCase()) newWord = newWord[0].toUpperCase() + newWord.slice(1)
  return str.replace(word, newWord)
}