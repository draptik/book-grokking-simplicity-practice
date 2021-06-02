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
    remove_item_by_name,
    setPriceByName
}