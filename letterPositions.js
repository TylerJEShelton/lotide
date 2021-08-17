const letterPositions = function(sentence) {
  const results = {};  // Create an empty object that will store unique characters and their indexes

  for (let i = 0; i < sentence.length; i++) {
    // loop through each of the characters in the string
    const character = sentence[i];  // store the character found at the specific index of the string in a separate variable for easy reuse
    if (character !== " ") {  // continue if the current character is not a " "
      // if the current key has been added to the result already, add the current index to the array of indeces
      if (results[character]) {
        results[character].push(i);
      } else {
        // if the current key has not been added, add the key to the result object as an array.
        results[character] = [i];
      }
    }
  }
  return results;  // return the object
};

module.exports = letterPositions;