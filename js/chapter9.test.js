const {
    add_item, 
    remove_item_by_name,
    setPriceByName } = require('./chapter9');

describe("add item", () => {
    test("works", () => {
        const cart = [{ name: "a", price: 1 }];
        const result = add_item(cart, { name: "b", price: 2 });
        expect(result.length).toBe(2);
        expect(result[0]).toEqual({ name: "a", price: 1 });
        expect(result[1]).toEqual({ name: "b", price: 2 });
    })
})

describe("remove item by name", () => {
    test("works", () => {
        const cart = [{ name: "a", price: 1 }, { name: "b", price: 2 }];
        const result = remove_item_by_name(cart, "a");
        expect(result.length).toBe(1);
        expect(result[0].name).toBe("b");
    })
})

describe("set price by name", () => {
    test("works", () => {
        const cart = [{ name: "a", price: 1 }, { name: "b", price: 2 }];
        const result = setPriceByName(cart, "a", 42);
        expect(result.length).toBe(2);
        expect(result[0]).toEqual({name: "a", price: 42});
    })

    test("also works when name is not found", () => {
        const cart = [{ name: "a", price: 1 }, { name: "b", price: 2 }];
        const result = setPriceByName(cart, "foo", 42);
        expect(result.length).toBe(2);
        expect(result[0]).toEqual({name: "a", price: 1});
    })
})
