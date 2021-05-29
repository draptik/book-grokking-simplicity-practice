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
