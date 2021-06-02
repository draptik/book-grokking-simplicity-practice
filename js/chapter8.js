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
    return indexOfItem(cart, name) !== null;
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

function indexOfItem(cart, name) {
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].name === name) {
            return i;
        }
    }
    return null;
}

function remove_item_by_name(cart, name) {
    var idx = indexOfItem(cart, name);
    if (idx !== null) {
        return removeItems(cart, idx, 1);
    }

    return cart;
}

// Set price by name ---------------------------------
function setPrice(item, new_price) {
    var item_copy = Object.assign({}, item);
    item_copy.price = new_price;
    return item_copy;
}

function setPriceByName(cart, name, price) {
    var cartCopy = cart.slice();
    for (let i = 0; i < cartCopy.length; i++) {
        if (cartCopy[i].name === name) {
            cartCopy[i] = setPrice(cartCopy[i], price);
        }
    }
    return cartCopy;
}



module.exports = {
    freeTieClip,
    remove_item_by_name,
    setPriceByName
}