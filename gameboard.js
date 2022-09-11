const createShip = require('./ship');

function gameboard() {
    const grid = [];
    const ships = [
        carrier, // 5 slots
        battleship, // 4 slots
        cruiser, // 3 slots
        submarine, // 3 slots
        destroyer // 2 slots
    ];
    for(let i = 0; i < 10; i++) {
        for(let j = 0; j < 10; j++) {
            grid.push([i, j]);
        }
    }
    return {
        grid,
        addShip(x, y, direction, length) {
            createShip(length);
            grid[x, y]
        },
    }
}

module.exports = gameboard;