const {
    add_item, 
    calc_total,
    remove_item_by_name,
    setPriceByName } = require('./chapter9');

describe("add item", () => {
    test("works", () => {
        const cart = { "a": 1 };
        const result = add_item(cart, { name: "b", price: 2 });
        expect(result["a"]).toBe(1);
        expect(result["b"]).toBe(2);
    })
})
describe("calc total", () => {
    test("new implementation works", () => {
        const cart = { "a": 1, "b": 2 };
        const result = calc_total(cart);
        expect(result).toBe(3);
    })
})

describe("remove item by name", () => {
    test("works", () => {
        // const cart = [{ name: "a", price: 1 }, { name: "b", price: 2 }];
        // const result = remove_item_by_name(cart, "a");
        // expect(result.length).toBe(1);
        // expect(result[0].name).toBe("b");
    })
})

describe("set price by name", () => {
    test("works", () => {
        const cart = { "a": 1, "b": 2 };
        const result = setPriceByName(cart, "a", 42);
        expect(result["a"]).toBe(42);
    })
    
    test("creates new item in case the item does not exist yet", () => {
        const cart = { "a": 1, "b": 2 };
        const result = setPriceByName(cart, "c", 42);
        expect(result["c"]).toBe(42);
    })
})
