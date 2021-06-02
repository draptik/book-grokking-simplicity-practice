// Add item ------------------------------------------
function add_element_last(array, elem) {
    var new_array = array.slice();
    new_array.push(elem);
    return new_array;
}

function add_item(cart, item) {
    return add_element_last(cart, item);
}

function make_item(name, price) {
    return {
        name: name,
        price: price
    }
}

function isInCart(cart, name) {
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].name === name) {
            return true;
        }        
    }
    return false;
}

function freeTieClip(cart) {
    var hasTie = isInCart(cart, "tie");
    var hasTieClip = isInCart(cart, "tie clip");
    if (hasTie && !hasTieClip) {
        var tieClip = make_item("tie clip", 0);
        return add_item(cart, tieClip);
    }
    return cart;
}

// Remove items --------------------------------------
function removeItems(array, idx, count) {
    var copy = array.slice();
    copy.splice(idx, count);
    return copy;
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

module.exports = {
    freeTieClip,
    remove_item_by_name
}