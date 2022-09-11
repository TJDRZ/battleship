function createShip(size) {
    const hp = new Array(size);
    hp.fill(false);
    return {
        hp,
        hit(location) {
            hp[location] = true;
            hp.includes(false) ? null : this.isSunk = true;
        },
        isSunk: false
    }
}

module.exports = createShip;