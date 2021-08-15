const assert = require('chai').assert;
const tail = require('../tail');

describe("tail", () => {
  it("returns 3 ensuring that the length of words isn't altered", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.strictEqual(words.length, 3);
  });

  it('returns 2 when we pass["Hello", "Lighthouse", "Labs"] into tail and look at the length', () => {
    const words = ["Hello", "Lighthouse", "Labs"];
    const result = tail(words);
    assert.strictEqual(result.length, 2);
  });

  it('returns "Lighthouse" when we pass["Hello", "Lighthouse", "Labs"] into tail and look at the first element in the returned array', () => {
    const words = ["Hello", "Lighthouse", "Labs"];
    const result = tail(words);
    assert.strictEqual(result[0], "Lighthouse");
  });

  it('returns "Labs" when we pass["Hello", "Lighthouse", "Labs"] into tail and look at the second element in the returned array', () => {
    const words = ["Hello", "Lighthouse", "Labs"];
    const result = tail(words);
    assert.strictEqual(result[1], "Labs");
  });
});