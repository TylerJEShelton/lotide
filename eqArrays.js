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

module.exports = eqArrays;