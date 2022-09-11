const createShip = require("./ship");

// const ships = [
//     carrier, // 5 slots
//     battleship, // 4 slots
//     cruiser, // 3 slots
//     submarine, // 3 slots
//     destroyer, // 2 slots
//   ];

function _createGrid() {
  const grid = [];
  for (let i = 0; i < 10; i++) {
    const row = [];
    let x = "";
    switch (i) {
      case 0:
        x = "A";
        break;
      case 1:
        x = "B";
        break;
      case 2:
        x = "C";
        break;
      case 3:
        x = "D";
        break;
      case 4:
        x = "E";
        break;
      case 5:
        x = "F";
        break;
      case 6:
        x = "G";
        break;
      case 7:
        x = "H";
        break;
      case 8:
        x = "I";
        break;
      case 9:
        x = "J";
        break;
    }
    for (let j = 0; j < 10; j++) {
      row.push({
        coordinates: `${x}${j}`,
        holdsShip: false,
        attacked: false,
      });
    }
    grid.push(row);
  }
  return grid;
}

function gameboard() {
  const board = _createGrid();
  return {
    board,
    addShip(x, y, direction, length) {
      createShip(length);
      grid[(x, y)];
    },
  };
}

module.exports = gameboard;
