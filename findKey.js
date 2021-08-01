const assertEqual = function(actual, expected) {

  // if actual and expected are equal, Pass, otherwise Fail
  actual === expected ? console.log(`✅ Assertion Passed: ${actual} === ${expected}`) :
    console.log(`🚨 Assertion Failed: ${actual} !== ${expected}`);
};

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

// Test Function Data and Calls

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

const bestRestaurants = {
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
};

assertEqual(findKey(bestRestaurants, x => x.stars === 2), "noma");
assertEqual(findKey(bestRestaurants, x => x.stars === 3), "Akaleri");
assertEqual(findKey(bestTVShowsByGenre, x => x === "The Wire"), "drama");