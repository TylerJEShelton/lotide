const assertEqual = function(actual, expected) {

  // if actual and expected are equal, Pass, otherwise Fail
  actual === expected ? console.log(`✅ Assertion Passed: ${actual} === ${expected}`) :
    console.log(`🚨 Assertion Failed: ${actual} !== ${expected}`);
};

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

// Returns true if both objects have identical keys with identical values, otherwise false
const eqObjects = function(object1, object2) {
  const object1Keys = Object.keys(object1);  // create variable that will store object1 keys
  const object2Keys = Object.keys(object2);  // create variable that will store object2 keys

  // check to see if the length of the keys are identical
  if (object1Keys.length === object2Keys.length) {
    // loop through the object1 keys
    for (const key of object1Keys) {
      // check to see if the current key is an array in both object1 and object2, if yes, run through eqArrays to compare
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;  // if the arrays are not equal, return false
        }
      } else {
        // if the current keys are not arrays then check to see if the keys are in both objects or if the 2 values at the current key are identical
        if (!(key in object2) || object1[key] !== object2[key]) {
          return false;  // if either test fails, return false
        }
      }
    }
    return true;  // if all tests pass, return true
  }
  return false;  // if key lengths are not equal, return false
};

// Test Function Data and Calls

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
//const abc = { a: "1", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
//const cd2 = { c: "1", d: "2" };
assertEqual(eqObjects(cd, cd2), false); // => false