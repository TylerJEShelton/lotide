const map = (array, callback) => {
  const results = [];  // create a variable to store the results

  // loop through each element in the array
  for (const item of array) {
    results.push(callback(item));  // add the results of the callback function on each element to the results array
  }
  return results;  // return the results
};

module.exports = map;