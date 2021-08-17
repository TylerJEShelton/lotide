const flatten = function(array) {
  let flattenedArray = [];

  array.forEach(element => {
    if (Array.isArray(element)) {
      flattenedArray.push(...flatten(element));
    } else {
      flattenedArray.push(element);
    }
  });
  return flattenedArray;
};

module.exports = flatten;