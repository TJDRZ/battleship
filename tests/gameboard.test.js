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

  test("adds ship to ships array - hp test", () => {
    expect(board.ships[0].hp).toEqual([
      {
        x: 0,
        y: 2,
        attacked: false,
      },
      {
        x: 0,
        y: 3,
        attacked: false,
      },
    ]);
  });
});

describe("receive attack", () => {
  let board = {};
  beforeEach(() => {
    board = gameboard();
    board.addShip(0, 0, "V", 2);
  });

  test("attack miss", () => {
    board.receiveAttack([1, 0]);
    expect(board.board[0][0]).toEqual({
      x: 0,
      y: 0,
      holdsShip: true,
      attacked: false,
    });
  });

  test("attack hit - board test", () => {
    board.receiveAttack([0, 0]);
    expect(board.board[0][0]).toEqual({
      x: 0,
      y: 0,
      holdsShip: true,
      attacked: true,
    });
  });

  test("attack hit - ship test", () => {
    board.receiveAttack([0, 0]);
    expect(board.ships[0].hp).toEqual([
      {
        x: 0,
        y: 0,
        attacked: true,
      },
      {
        x: 0,
        y: 1,
        attacked: false,
      },
    ]);
  });

  test("all ships sunk, Game Over", () => {
    board.receiveAttack([0, 0]);
    board.receiveAttack([0, 1]);
    expect(board.loser).toBeTruthy();
  });
});
