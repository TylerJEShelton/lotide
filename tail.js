const assertEqual = require('./assertEqual');

const tail = function(array) {
  // return the array, minus the first element
  return array.slice(1);
};

module.exports = tail;