var shopping_cart = [];
var shopping_cart_total = 0;

function add_item_to_cart(name, price) {
    shopping_cart.push({
        name: name,
        price: price
    });
    calc_cart_total();
}

function calc_cart_total() {
    calc_total();
    set_cart_total_dom();
    update_shipping_icons();
    update_tax_dom();
}

function calc_total() {
    shopping_cart_total = 0;
    for (let i = 0; i < shopping_cart.length; i++) {
        var item = shopping_cart[i];
        shopping_cart_total += item.price;
    }
}

function update_tax_dom() {
    set_tax_dom(shopping_cart_total * 0.10);
}