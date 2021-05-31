var shopping_cart = [];
var shopping_cart_total = 0;

function add_item_to_cart(name, price) {
    shopping_cart = add_item(shopping_cart, make_cart_item(name, price));

    var total = calc_total(shopping_cart);
    set_cart_total_dom(total);
    update_shipping_icons(shopping_cart);
    update_tax_dom(total);
    shopping_cart_total = total;
}

function add_item(cart, item) {
    var new_cart = cart.slice();
    new_cart.push(item);
    return new_cart;
}

function make_cart_item(name, price) {
    return {
        name: name,
        price: price
    }
}

function calc_total(cart) {
    var total = 0;
    for (let i = 0; i < cart.length; i++) {
        var item = cart[i];
        total += item.price;
    }
    return total;
}

function update_tax_dom(total) {
    set_tax_dom(calc_tax(total));
}

function calc_tax(amount) {
    return amount * 0.10;
}

function update_shipping_icons(cart) {
    var buy_buttons = get_buy_buttons_dom();
    for (let i = 0; i < buy_buttons.length; i++) {
        var button = buy_buttons[i];
        var item = btnToItem(button);

        var new_cart = add_item(cart, item);

        if (gets_free_shipping(new_cart)) {
            show_free_shipping_icon(button);
        } else {
            hide_free_shipping_icon(button);
        }
    }
}

function gets_free_shipping(cart) {
    return calc_total(cart) >= 20;
}