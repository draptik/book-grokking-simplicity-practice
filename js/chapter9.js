// low level function ---------------------------------
function objectSet(object, key, value) {
    var copy = Object.assign({}, object);
    copy[key] = value;
    return copy;
}

// Add item ------------------------------------------
function add_item(cart, item) {
    return objectSet(cart, item.name, item.price);
}

// Calc total ----------------------------------------
function calc_total(cart) {
    var total = 0;
    var names = Object.keys(cart);
    for (let i = 0; i < names.length; i++) {
        var item = cart[names[i]];
        total += item;
    }
    return total;
}

// Remove items --------------------------------------
function objectDelete(object, key) {
    var copy = Object.assign({}, object);
    delete copy[key];
    return copy;
}

function remove_item_by_name(cart, name) {
    return objectDelete(cart, name);
}

// Set price by name ---------------------------------
function setPrice(item, new_price) {
    var item_copy = Object.assign({}, item);
    item_copy.price = new_price;
    return item_copy;
}

function isInCart(cart, name) {
    return cart.hasOwnProperty(name);
}

function make_item(name, price) {
    return {
        name: name,
        price: price
    }
}

function setPriceByName(cart, name, price) {
    if (isInCart(cart, name)) {
        var item = cart[name];
        var copy = setPrice(item, price);
        return objectSet(cart, name, copy.price);
    } else {
        var item = make_item(name, price);
        return objectSet(cart, name, item.price);
    }
}

module.exports = {
    add_item,
    calc_total,
    remove_item_by_name,
    setPriceByName
}