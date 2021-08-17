const without = function(source, itemsToRemove) {
  //create empty array to store elements that will not be removed
  let itemsRemaining = [];

  // loop through each element in the source array
  for (let i = 0; i < source.length; i++) {
    let addItem = true;  // set addItem to true to start each pass through a source element
    // loop through each element in the itemsToRemove array to see if there is a match
    for (let j = 0; j < itemsToRemove.length; j++) {
      // if there is a match, set addItem to false since this element will not be returned since it's been requested to be removed
      if (source[i] === itemsToRemove[j]) {
        addItem = false;
      }
    }
    if (addItem) {
      // if after looping through all the itemsToRemove and there is not a match, add the element at source[i] to the array of itemsRemaining
      itemsRemaining.push(source[i]);
    }
  }
  return itemsRemaining;  // return the array of items that were not removed
};

module.exports = without;