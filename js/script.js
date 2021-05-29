var shopping_cart = [];
var shopping_cart_total = 0;

function add_item_to_cart(name, price) {
    shopping_cart = add_item(shopping_cart, name, price);
    calc_cart_total();
}

function add_item(cart, name, price) {
    var new_cart = cart.slice();
    new_cart.push({
        name: name,
        price: price
    });
    return new_cart;
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
    set_tax_dom(calc_tax(shopping_cart_total));
}

function calc_tax(amount) {
    return amount * 0.10;
}

function update_shipping_icons() {
    var buy_buttons = get_buy_buttons_dom();
    for (let i = 0; i < buy_buttons.length; i++) {
        var button = buy_buttons[i];
        var item = btnToItem(button);
        if (gets_free_shipping(shopping_cart_total, item.price)) {
            show_free_shipping_icon(button);
        } else {
            hide_free_shipping_icon(button);
        }
    }
}

function gets_free_shipping(total, item_price) {
    return item_price + total >= 20;
}