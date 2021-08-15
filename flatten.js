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
  let flattenedArray = [];

  array.forEach(element => {
    if (Array.isArray(element)) {
      flattenedArray.push(...flatten(element));
    } else {
      flattenedArray.push(element);
    }
  });
  return flattenedArray;
}


console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]

assertArraysEqual(flatten([1, 2, [3, [54, [54]], 4], 5, [6]]), [1, 2, 3, 54, 54, 4, 5, 6]);