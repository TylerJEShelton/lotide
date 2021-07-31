const eqArrays = function(array1, array2) {
  // if the arrays are the same length continue, otherwise return false
  if (array1.length === array2.length) {
    // loop through each element of both arrays
    for (let i = 0; i < array1.length; i++) {
      // if the array elements at index i do not match return false
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;  // if the array iterations complete without finding a mismatch, return true
};

const assertArraysEqual = function(actual, expected) {

  // if actual and expected are equal, Pass, otherwise Fail
  eqArrays(actual, expected) ? console.log(`✅ Assertion Passed: [${actual}] === [${expected}]`) :
    console.log(`🚨 Assertion Failed: [${actual}] !== [${expected}]`);
};

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


// Test Function Data and Calls

const testRun1 = letterPositions("hello");
const testRun2 = letterPositions("lighthouse in the house");

console.log(testRun1);
assertArraysEqual(testRun1["l"], [2, 3]);
console.log(testRun2);
assertArraysEqual(testRun2["h"], [3, 5, 15, 18]);