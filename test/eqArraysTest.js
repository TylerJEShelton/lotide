const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

// Test Function Calls

assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), true); // => should FAIL
assertEqual(eqArrays(["1", 2, 3], [1, 2, 3]), true);  // => should FAIL
assertEqual(eqArrays([1, "2"], [1, "2"]), true); // => should PASS
assertEqual(eqArrays([7, 6, 5], [5, 6, 7]), true); // => should FAIL