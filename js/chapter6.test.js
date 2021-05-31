const { setPrice } = require('./chapter6');

describe("setPrice", () => {
    test("works", () => {
        const item = {};
        expect(setPrice(item, 42)).toBe(42);
    })
})