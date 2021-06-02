const { 
freeTieClip } = require('./chapter8');

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
