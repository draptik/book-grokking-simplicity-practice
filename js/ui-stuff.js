function set_cart_total_dom() {
    var element = document.getElementById("shoppingCartTotal")
    element.innerText = shopping_cart_total;
}

function get_buy_buttons_dom() {
    var buttons = document.getElementsByClassName('btnItem');
    return buttons;
}

function btnToItem(btn) {
    var productPrice = parseInt(btn.querySelector('.productPrice').innerText);
    return {
        price: productPrice
    };
}

function show_free_shipping_icon(button) {
    var freeShipping = button.querySelector('.freeShipping')
    freeShipping.style.display = 'inline-block';
}

function hide_free_shipping_icon(button) {
    var freeShipping = button.querySelector('.freeShipping')
    freeShipping.style.display = 'none';
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
