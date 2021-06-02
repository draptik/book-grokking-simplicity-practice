const { 
freeTieClip,
remove_item_by_name,
setPriceByName } = require('./chapter8');

describe("tie is in cart:", () => {
    
    test("add clip when no clip is in cart yet", () => {
        const cart = [{ name: "tie", price: 10 }];
        const result = freeTieClip(cart);
        expect(result.length).toBe(2);
        expect(result[1].name).toBe("tie clip");
        expect(result[1].price).toBe(0);
    });

    test("don't add another clip when clip is in cart already", () => {
        const cart = [{ name: "tie", price: 10 }, {name: "tie clip", price: 1}];
        const result = freeTieClip(cart);
        expect(result.length).toBe(2);
        expect(result[1].name).toBe("tie clip");
        expect(result[1].price).toBe(1);
    });
});

describe("no tie in cart:", () => {
    test("don't add free clip", () => {
        const cart = [{ name: "other product", price: 10 }];
        const result = freeTieClip(cart);
        expect(result.length).toBe(1);
    });
});

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

    test("works when name is not found", () => {
        const cart = [{ name: "a", price: 1 }, { name: "b", price: 2 }];
        const result = setPriceByName(cart, "foo", 42);
        expect(result.length).toBe(2);
        expect(result[0]).toEqual({name: "a", price: 1});
    })
})
