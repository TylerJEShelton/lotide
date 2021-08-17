// Returns true if both objects have identical keys with identical values, otherwise false
const eqObjects = require("./eqObjects");

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  // if actual and expected are equal, Pass, otherwise Fail
  eqObjects(actual, expected) ? console.log(`✅ Assertion Passed: [${inspect(actual)}] === [${inspect(expected)}]`) :
    console.log(`🚨 Assertion Failed: [${inspect(actual)}] !== [${inspect(expected)}]`);

};

module.exports = assertObjectsEqual;