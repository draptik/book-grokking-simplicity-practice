function set_cart_total_dom(total) {
    var element = document.getElementById("shoppingCartTotal")
    element.innerText = total;
}

function get_buy_buttons_dom() {
    var buttons = document.getElementsByClassName('btnItem');
    return buttons;
}

function btnToItem(btn) {
    var productName = btn.querySelector('.productName').innerText
    var productPrice = parseInt(btn.querySelector('.productPrice').innerText);
    return {
        name: productName,
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

function set_tax_dom(tax) {
    // nop
}