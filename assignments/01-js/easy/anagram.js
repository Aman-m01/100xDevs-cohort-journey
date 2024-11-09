/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const oldWord = str1.toLowerCase();
  const newWord = str2.toLowerCase();
  if (oldWord.length !== newWord.length) {
    return false;
  }
  const letterCount = {};
  for (let letter of oldWord) {
    letterCount[letter] = (letterCount[letter] || 0) + 1;
  }
  for (let letter of newWord) {
    if (!letterCount[letter]) {
      return false;
    }
    letterCount[letter]--;
  }
  return true;


}

module.exports = isAnagram;
