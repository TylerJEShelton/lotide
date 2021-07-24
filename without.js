const eqArrays = function(array1, array2) {
  // if the arrays are not the same length, return false
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

const without = function(source, itemsToRemove) {
  //create empty array to store elements that will not be removed
  let itemsRemaining = [];

  // loop through each element in the source array
  for (let i = 0; i < source.length; i++) {
    let addItem = true;  // set addItem to true to start each pass through a source element
    // loop through each element in the itemsToRemove array to see if there is a match
    for (let j = 0; j < itemsToRemove.length; j++) {
      // if there is a match, set addItem to false since this element will not be returned since it's been requested to be removed
      if (source[i] === itemsToRemove[j]) {
        addItem = false;
      }
    }
    if (addItem) {
      // if after looping through all the itemsToRemove and there is not a match, add the element at source[i] to the array of itemsRemaining
      itemsRemaining.push(source[i]);
    }
  }
  return itemsRemaining;  // return the array of items that were not removed
};

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", '2', "3"], [1, 2, "3"])); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);