const findKey = (object, callback) => {
  // loop through the objects that were passed through
  for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
      const value = object[key];  // assign the value of the current key to value
      // if the callback returns a truthy response, return the current key
      if (callback(value)) {
        return (key);
      }
    }
  }
};

module.exports = findKey;