const gameboard = require("../factories/gameboard");

describe("create gameboard", () => {
  const board = gameboard();
  test("first row test", () => {
    expect(board.board[0]).toEqual([
      {
        x: 0,
        y: 0,
        holdsShip: false,
        attacked: false,
      },
      {
        x: 0,
        y: 1,
        holdsShip: false,
        attacked: false,
      },
      {
        x: 0,
        y: 2,
        holdsShip: false,
        attacked: false,
      },
      {
        x: 0,
        y: 3,
        holdsShip: false,
        attacked: false,
      },
      {
        x: 0,
        y: 4,
        holdsShip: false,
        attacked: false,
      },
      {
        x: 0,
        y: 5,
        holdsShip: false,
        attacked: false,
      },
      {
        x: 0,
        y: 6,
        holdsShip: false,
        attacked: false,
      },
      {
        x: 0,
        y: 7,
        holdsShip: false,
        attacked: false,
      },
      {
        x: 0,
        y: 8,
        holdsShip: false,
        attacked: false,
      },
      {
        x: 0,
        y: 9,
        holdsShip: false,
        attacked: false,
      },
    ]);
  });

  test("random coordinate test", () =>
    expect(board.board[6][8]).toEqual({
      x: 6,
      y: 8,
      holdsShip: false,
      attacked: false,
    }));
});

describe("adding ships", () => {
  const board = gameboard();
  board.addShip(0, 2, "V", 2);

  test("starting coords hold ship", () => {
    expect(board.board[0][2]).toEqual({
      x: 0,
      y: 2,
      holdsShip: true,
      attacked: false,
    });
  });

  test("extra coords hold ship", () => {
    expect(board.board[0][3]).toEqual({
      x: 0,
      y: 3,
      holdsShip: true,
      attacked: false,
    });
  });

  test("other coords do not hold ship", () => {
    expect(board.board[0][4]).toEqual({
      x: 0,
      y: 4,
      holdsShip: false,
      attacked: false,
    });
  });
});

describe("receive attack", () => {
  test("attack miss", () => {
    expect(board.receiveAttack([1, 0])).toEqual({
      x: 1,
      y: 0,
      holdsShip: false,
      attacked: true,
    });
  });

  test("attack hit", () => {
    expect(board.receiveAttack([0, 0])).toEqual([
      {
        x: 0,
        y: 0,
        holdsShip: true,
        attacked: true,
      },
      {
        x: 0,
        y: 0,
        attacked: true,
      },
    ]);
  });

  test("all ships sunk, Game Over", () => {
    expect(board.receiveAttack([0, 0])).toEqual("Game Over");
  });
});
