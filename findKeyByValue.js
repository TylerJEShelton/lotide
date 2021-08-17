const findKeyByValue = function(objectToSearch, valueToFind) {
  // loop through the object's keys
  for (const key in objectToSearch) {
    if (Object.hasOwnProperty.call(objectToSearch, key)) {
      const element = objectToSearch[key];  // store current value of current key
      if (element === valueToFind) {
        // if the current value equals the valueToFind, return the current key
        return key;
      }
    }
  }
};

module.exports = findKeyByValue;