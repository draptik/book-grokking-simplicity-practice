function setPrice(item, new_price) {
    var item_copy = Object.assign({}, item);
    item_copy.price = new_price;
    return item_copy;
}

function objectSet(object, key, value) {
    var copy = Object.assign({}, object);
    copy[key] = value;
    return copy;
}

function setQuantity(item, new_quantity) {
    return objectSet(item, "quantity", new_quantity);
}

function objectDelete(object, key) {
    var copy = Object.assign({}, object);
    delete copy[key];
    return copy;
}

module.exports = {
    setPrice,
    objectSet,
    setQuantity,
    objectDelete
}