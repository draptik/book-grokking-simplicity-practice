var shopping_cart = [];

// General functions -----------------------------
function add_element_last(array, elem) {
    var new_array = array.slice();
    new_array.push(elem);
    return new_array;
}

function removeItems(array, idx, count) {
    var copy = array.slice();
    copy.splice(idx, count);
    return copy;
}

// Custom ----------------------------------------

function delete_handler(name) {
    shopping_cart = remove_item_by_name(shopping_cart, name);
    var total = calc_total(shopping_cart);
    set_cart_total_dom(total);
    update_shipping_icons(shopping_cart);
    update_tax_dom(total);
}

function remove_item_by_name(cart, name) {
    var idx = null;
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].name === name) {
            idx = i;
        }
    }
    if (idx !== null) {
        return removeItems(cart, idx, 1);
    }

    return cart;
}

function add_item_to_cart(name, price) {
    var item = make_cart_item(name, price)
    shopping_cart = add_item(shopping_cart, item);

    var total = calc_total(shopping_cart);
    set_cart_total_dom(total);
    update_shipping_icons(shopping_cart);
    update_tax_dom(total);
}

function add_item(cart, item) {
    return add_element_last(cart, item);
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
        var hasFreeShipping = gets_free_shipping(new_cart);
        set_free_shipping_icon(button, hasFreeShipping)
    }
}

function gets_free_shipping_with_item(cart, item) {
    var new_cart = add_item(cart, item);
    return gets_free_shipping(new_cart);
}

function set_free_shipping_icon(button, isShown) {
    if (isShown) {
        show_free_shipping_icon(button);
    } else {
        hide_free_shipping_icon(button);
    }
}

function gets_free_shipping(cart) {
    return calc_total(cart) >= 20;
}