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

const flatten = function(array) {
  // create empty array that will store the flattened array
  let flattenedArray = [];
  // loop through the passed through array
  for (let i = 0; i < array.length; i++) {
    // if the element is an array, iterate through that array
    if (Array.isArray(array[i])) {
      for (let j = 0; j < array[i].length; j++) {
        // add the item in the nested array to the flattened array
        flattenedArray.push(array[i][j]);
      }
    } else {
      // add the item in the array to the flattened array
      flattenedArray.push(array[i]);
    }
  }
  // return the flattened array
  return flattenedArray;
};

console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);