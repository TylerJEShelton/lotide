const assertEqual = function(actual, expected) {

  // if actual and expected are equal, Pass, otherwise Fail
  actual === expected ? console.log(`✅ Assertion Passed: ${actual} === ${expected}`) :
    console.log(`🚨 Assertion Failed: ${actual} !== ${expected}`);
};

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

// Test Function Data and Calls

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sciFi");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);