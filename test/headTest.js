const head = require('../head');
const assertEqual = require('../assertEqual');

// Test Function Calls
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
console.log(head([5]));
console.log(head([]));