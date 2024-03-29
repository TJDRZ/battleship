const ship = require("./ship");

// const ships = [
//     carrier, // 5 slots
//     battleship, // 4 slots
//     cruiser, // 3 slots
//     submarine, // 3 slots
//     destroyer, // 2 slots
//   ];

const _createGrid = () => {
  const grid = [];
  for (let i = 0; i < 10; i++) {
    const row = [];
    for (let j = 0; j < 10; j++) {
      row.push({
        x: i,
        y: j,
        holdsShip: false,
        attacked: false,
      });
    }
    grid.push(row);
  }
  return grid;
};

function gameboard() {
  const board = _createGrid();
  return {
    board,
    ships: [],
    loser: false,
    addShip(x, y, direction, length) {
      const coordinates = [];
      if ((direction = "V")) {
        for (let i = 0; i < length; i++) {
          this.board[x][y + i].holdsShip = true;
          coordinates.push([x, y + i]);
        }
      } else {
        for (let i = 0; i < length; i++) {
          this.board[x + i][y].holdsShip = true;
          coordinates.push([x + i, y]);
        }
      }
      this.ships.push(ship(coordinates));
    },
    receiveAttack(coordinates) {
      const square = this.board[coordinates[0]][coordinates[1]];
      square.attacked = true;
      if (square.holdsShip) {
        const ship = this.ships.find((ship) => {
          const hitpoint = ship.hp.find(
            (hitpoint) =>
              hitpoint.x === coordinates[0] && hitpoint.y === coordinates[1]
          );
          if (hitpoint) ship.hit(coordinates);
        });
        if (this.ships.find((ship) => ship.isSunk === false)) {
          return;
        }
        this.loser = true;
      }
    },
  };
}

module.exports = gameboard;
