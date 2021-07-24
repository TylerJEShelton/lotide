const assertEqual = function(actual, expected) {

  // if actual and expected are equal, Pass, otherwise Fail
  actual === expected ? console.log(`✅ Assertion Passed: ${actual} === ${expected}`) :
    console.log(`🚨 Assertion Failed: ${actual} !== ${expected}`);
};

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

assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), true); // => should FAIL
assertEqual(eqArrays(["1", 2, 3], [1, 2, 3]), true);  // => should FAIL
assertEqual(eqArrays([1, "2"], [1, "2"]), true); // => should PASS
assertEqual(eqArrays([7, 6, 5], [5, 6, 7]), true); // => should FAIL