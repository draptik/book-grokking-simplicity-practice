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
    shopping_cart_total = 0;
    for (let i = 0; i < shopping_cart.length; i++) {
        var item = shopping_cart[i];
        shopping_cart_total += item.price;
    }
    set_cart_total_dom();
    update_shipping_icons();
}

function update_shipping_icons() {
    var buy_buttons = get_buy_buttons_dom();
    for (let i = 0; i < buy_buttons.length; i++) {
        var button = buy_buttons[i];
        var item = btnToItem(button);
        if (item.price + shopping_cart_total >= 20) {
            show_free_shipping_icon(button);
        } else {
            hide_free_shipping_icon(button);
        }
    }
}