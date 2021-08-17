const countOnly = function(allItems, itemsToCount) {
  const itemsCounted = {};  // create an empty object that will store the items counted and the times counted

  // loop through the itemsToCount object
  for (const item in itemsToCount) {
    let numOfItems = 0;  // create a local tracking variable that will store the number of times the current item is counted
    if (Object.hasOwnProperty.call(itemsToCount, item)) {
      const currentItemToCount = itemsToCount[item];  // store the value of the current key

      // loop through the passed through array to see if it is storing any of the current item we are looking to count
      for (const itemFromList of allItems) {
        // if we find the current item in the array AND the value of this item(key) is set to true (meaning count this item),
        // add one to our count tracker variable
        if (itemFromList === item && currentItemToCount) {
          numOfItems++;
        }
      }
      // if the value of this item(key) is set to true (meaning count this item) AND the number of times counted is not zero,
      // add the key value pair to our itemsCounted variable so that it can be returned
      if (currentItemToCount && numOfItems !== 0) {
        itemsCounted[item] = numOfItems;
      }
    }
  }
  return itemsCounted;  // return the object that shows items found and their times counted
};

module.exports = countOnly;