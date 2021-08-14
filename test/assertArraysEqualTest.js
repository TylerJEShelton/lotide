const assertArraysEqual = require('../assertArraysEqual');

// Test Function Calls

assertArraysEqual([1, 2], [1, 2]);
assertArraysEqual([1, 2], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [2, 2, 3]);