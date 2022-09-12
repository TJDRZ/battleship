const ship = require("../factories/ship");

describe("ship creation", () => {
  test("creates ship's hitpoints", () =>
    expect(
      ship([
        [0, 1],
        [0, 2],
        [0, 3],
        [0, 4],
      ]).hp
    ).toEqual([
      {
        x: 0,
        y: 1,
        attacked: false,
      },
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
      {
        x: 0,
        y: 4,
        attacked: false,
      },
    ]));
});

describe("ship gets hit", () => {
  let newShip = {};
  beforeEach(
    () =>
      (newShip = ship([
        [0, 0],
        [0, 1],
      ]))
  );

  test("proper hitpoint is hit", () => {
    newShip.hit([0, 0]);
    expect(newShip.hp).toEqual([
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

  test("ship gets sunk on NOT all hitpoints hit", () => {
    newShip.hit([0, 1]);
    expect(newShip.isSunk).toBeFalsy();
  });

  test("ship gets sunk on all hitpoints hit", () => {
    newShip.hit([0, 0]);
    newShip.hit([0, 1]);
    expect(newShip.isSunk).toBeTruthy();
  });
});
