var shopping_cart = [];
var shopping_cart_total = 0;

function add_item_to_cart(name, price) {
    add_item(name, price);
    calc_cart_total();
}

function add_item(name, price) {
    shopping_cart.push({
        name: name,
        price: price
    });
}

function calc_cart_total() {
    shopping_cart_total = calc_total(shopping_cart);
    set_cart_total_dom();
    update_shipping_icons();
    update_tax_dom();
}

function calc_total(cart) {
    var total = 0;
    for (let i = 0; i < cart.length; i++) {
        var item = cart[i];
        total += item.price;
    }
    return total;
}

function update_tax_dom() {
    set_tax_dom(shopping_cart_total * 0.10);
}