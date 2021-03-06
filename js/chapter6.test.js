const { 
    setPrice, 
    objectSet, 
    setQuantity, 
    objectDelete,
    setPriceByName,
    setQuantityByName } = require('./chapter6');

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
    
    test("objectDelete", () => {
        const item = { name: "a", price: 10 };
        const keyToDelete = "price";
        const result = objectDelete(item, keyToDelete);
        expect(result).toEqual({name: "a"});
    })

    test("setPriceByName", () => {
        const cart = [{name: "a", price: 1}, {name: "b", price: 2}];
        const result = setPriceByName(cart, "a", 42);
        expect(result).toEqual([{name: "a", price: 42}, {name: "b", price: 2}]);
    })

    test("setQuantityByName", () => {
        const cart = [{name: "a", quantity: 1}, {name: "b", quantity: 2}];
        const result = setQuantityByName(cart, "a", 42);
        expect(result).toEqual([{name: "a", quantity: 42}, {name: "b", quantity: 2}]);
    })
})