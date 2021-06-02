// low level function ---------------------------------

// object --------------
function objectSet(object, key, value) {
    var copy = Object.assign({}, object);
    copy[key] = value;
    return copy;
}

// array --------------
function arraySet(array, idx, value) {
    var copy = array.slice();
    copy[idx] = value;
    return copy;
}

function arrayGet(array, idx) {
    return array[idx];
}

function indexOfItem(cart, name) {
    for (let i = 0; i < cart.length; i++) {
        if (arrayGet(cart, i).name === name) {
            return i;
        }
    }
    return null;
}

// Add item ------------------------------------------
function add_item(cart, item) {
    return objectSet(cart, item.name, item.price);
}


// Calc total ----------------------------------------
function calc_total_original(cart) {
    var total = 0;
    for (let i = 0; i < cart.length; i++) {
        var item = cart[i];
        total += item.price;
    }
    return total;
}

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
function removeItems(array, idx, count) {
    var copy = array.slice();
    copy.splice(idx, count);
    return copy;
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
    var i = indexOfItem(cart, name);
    if (i !== null) {
        var item = arrayGet(cart, i);
        return arraySet(cart, i, setPrice(item, price));
    }
    return cart;
}

module.exports = {
    add_item,
    calc_total_original,
    calc_total,
    remove_item_by_name,
    setPriceByName
}