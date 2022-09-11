const createShip = require("./ship");

test("creates ship's hitpoints", () => {
  expect(createShip(4).hp).toEqual([false, false, false, false]);
});

describe("ship gets hit", () => {
  let newShip = {};
  beforeEach(() => (newShip = createShip(2)));

  test("proper hitpoint is hit", () => {
    newShip.hit(1);
    expect(newShip.hp).toEqual([false, true]);
  });

  test("ship gets sunk on NOT all hitpoints hit", () => {
    newShip.hit(0);
    expect(newShip.isSunk).toBeFalsy();
  });

  test("ship gets sunk on all hitpoints hit", () => {
    newShip.hit(0);
    newShip.hit(1);
    expect(newShip.isSunk).toBeTruthy();
  });
});
