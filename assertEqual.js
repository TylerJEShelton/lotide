// Function Implementation
const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅ Assertion Passed: ${actual} === ${expected}`) :
    console.log(`🚨 Assertion Failed: ${actual} !== ${expected}`);
};

// Test Calls
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Tyler", "tyler");
assertEqual("Miami", "Dolphins");
assertEqual(true, true);
assertEqual(false, true);
assertEqual("You Rock!", "You Rock!");
assertEqual(32, 43);