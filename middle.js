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

const assertArraysEqual = function(actual, expected) {

  // if actual and expected are equal, Pass, otherwise Fail
  eqArrays(actual, expected) ? console.log(`✅ Assertion Passed: [${actual}] === [${expected}]`) :
    console.log(`🚨 Assertion Failed: [${actual}] !== [${expected}]`);
};

const middle = function(array) {
  const middleArray = [];
  // middle finds the middle element in an array for all arrays larger than 2 elements and returns it in an array
  // if the array's length is even, return the 2 middle elements
  // if the array's length is odd, return the middle element
  // if the array has less than 2 elements, return an empty array
  if (array.length > 2 && array.length % 2 === 0) {
    // if the array is longer than 2 elements AND the array's length is even
    const middleIndex = (array.length - 1) / 2;  // find the middle index (Will be a decimal)
    // round down and set it as the first element in the middleArray
    middleArray.push(array[Math.floor(middleIndex)]);
    // round up set it as the second element in the middleArray
    middleArray.push(array[Math.ceil(middleIndex)]);
    return (middleArray);
  }
  if (array.length > 2 && array.length % 2 !== 0) {
    // if the array is longer than 2 elements AND the array's length is odd
    const middleIndex = (array.length - 1) / 2;  // find the middle index
    middleArray.push(array[(middleIndex)]);  // set the midpointArray to the element as an array
    return (middleArray);
  }
  return middleArray;  // return an empty array
};

assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 2]), []); // => []

assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]