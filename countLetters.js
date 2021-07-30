const assertEqual = function(actual, expected) {

  // if actual and expected are equal, Pass, otherwise Fail
  actual === expected ? console.log(`✅ Assertion Passed: ${actual} === ${expected}`) :
    console.log(`🚨 Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = function(sentence) {
  const result = {};  // Create an empty object that will store unique characters and their times counted

  for (const character of sentence) {
    // loop through each of the characters in the string
    if (character !== " ") {  // continue if the current character is not a " "
      // if the current key has been added to the result already, add one to the count
      if (result[character]) {
        result[character] += 1;
      } else {
        // if the current key has not been added, add the key to the result object with a value of 1
        result[character] = 1;
      }
    }
  }
  return result;  // return the object
};

// Test Function Data and Calls

const testSentence1 = "Hello my name is Zach";
const testSentence2 = "Valhalla";

const result1 = countLetters(testSentence1);
const result2 = countLetters(testSentence2);

assertEqual(result1["a"], 2);
assertEqual(result1["y"], 1);
assertEqual(result2["l"], 3);
assertEqual(result2["V"], 1);