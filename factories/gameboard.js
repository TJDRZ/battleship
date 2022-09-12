const createShip = require("./ship");

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

const _addShip = (board, startingCoordinate, direction, length) => {
  const shipCoords = [startingCoordinate];
  if ((direction = "V")) {
    for (let i = 0; i < length; i++) {
      board.forEach((row) => {
        row.forEach((square) => {
          if ((square.coordinates = startingCoordinate)) {
            return square;
          }
        });
      });
    }
  }
};

function gameboard() {
  const board = _createGrid();
  return {
    board,
    addShip(x, y, direction, length) {
      if ((direction = "V")) {
        for (let i = 0; i < length; i++) {
          board[x][y + i].holdsShip = true;
        }
      } else {
        for (let i = 0; i < length; i++) {
          board[x + i][y].holdsShip = true;
        }
      } // we are making ships in gameboard and ignoring ship objects/factory
    },
  };
}

module.exports = gameboard;
