const { setPrice, objectSet, setQuantity } = require('./chapter6');

describe("setPrice", () => {
    test("works", () => {
        const item = { name: "a", price: 10 };
        const result = setPrice(item, 42);
        expect(result.price).toBe(42);
        expect(result.name).toBe("a");
    })
})

describe("Exercises", () => {
    test("objectSet works", () => {
        const object = { name: "a", price: 10 };
        const key = "price";
        const new_value = 42;
        const result = objectSet(object, key, new_value);
        expect(result).toEqual({name: "a", price: new_value});
    })

    test("setQuantity", () => {
        const item = { name: "a", price: 10 };
        const new_quantity = 5;
        const result = setQuantity(item, new_quantity);
        expect(result).toEqual({name: "a", price: 10, quantity: 5});
    })
})