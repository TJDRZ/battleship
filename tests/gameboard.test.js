const gameboard = require("../factories/gameboard");

test("add ship to gameboard", () =>
  expect(gameboard.addShip(2, 2, V, length)).toEqual());

test("active player", () => {});

describe("receive attack", () => {
  test("attack miss", () => {});

  test("attack hit", () => {});

  test("all ships sunk, Game Over", () => {});
});
