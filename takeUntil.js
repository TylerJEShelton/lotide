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

// Test Function Data and Calls

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
