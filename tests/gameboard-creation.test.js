const gameboard = require("../factories/gameboard");

describe("create gameboard", () => {
  const board = gameboard();
  test("first row test", () => {
    expect(board.board[0]).toEqual([
      {
        coordinates: "A0",
        holdsShip: false,
        attacked: false,
      },
      {
        coordinates: "A1",
        holdsShip: false,
        attacked: false,
      },
      {
        coordinates: "A2",
        holdsShip: false,
        attacked: false,
      },
      {
        coordinates: "A3",
        holdsShip: false,
        attacked: false,
      },
      {
        coordinates: "A4",
        holdsShip: false,
        attacked: false,
      },
      {
        coordinates: "A5",
        holdsShip: false,
        attacked: false,
      },
      {
        coordinates: "A6",
        holdsShip: false,
        attacked: false,
      },
      {
        coordinates: "A7",
        holdsShip: false,
        attacked: false,
      },
      {
        coordinates: "A8",
        holdsShip: false,
        attacked: false,
      },
      {
        coordinates: "A9",
        holdsShip: false,
        attacked: false,
      },
    ]);
  });

  test("random coordinate test", () =>
    expect(board.board[6][8]).toEqual({
      coordinates: "G8",
      holdsShip: false,
      attacked: false,
    }));
});
