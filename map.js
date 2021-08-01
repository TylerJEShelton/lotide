const eqArrays = function(array1, array2) {
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {

  // if actual and expected are equal, Pass, otherwise Fail
  eqArrays(actual, expected) ? console.log(`✅ Assertion Passed: [${actual}] === [${expected}]`) :
    console.log(`🚨 Assertion Failed: [${actual}] !== [${expected}]`);
};

const map = (array, callback) => {
  const results = [];  // create a variable to store the results

  // loop through each element in the array
  for (const item of array) {
    results.push(callback(item));  // add the results of the callback function on each element to the results array
  }
  return results;  // return the results
};

// Test Function Data and Calls

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);

const nums = [1, 2, 3, 4, 5];
const results2 = map(nums, num => num * 3);
assertArraysEqual(results2, [3, 6, 9, 12, 15]);