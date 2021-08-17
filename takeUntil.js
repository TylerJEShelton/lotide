const takeUntil = function(array, callback) {
  const result = [];  // create an empty array that will store the results
  // loop through all of the elements in the array
  for (const element of array) {
    //check to see if the current element in the array meets the callback functions test
    if (callback(element)) {
      return result;  // if it does, return the result array
    }
    result.push(element); // if it did not, add the element to the results
  }
  return result;  // return the array of results
};

module.exports = takeUntil;