const { expect } = require('@jest/globals');
const { setPrice } = require('./chapter6');

describe("setPrice", () => {
    test("works", () => {
        const item = { name: "a", price: 10 };
        const result = setPrice(item, 42);
        expect(result.price).toBe(42);
        expect(result.name).toBe("a");
    })
})