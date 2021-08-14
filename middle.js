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

module.exports = middle;