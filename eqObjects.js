const eqArrays = require('./eqArrays');

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

module.exports = eqObjects;