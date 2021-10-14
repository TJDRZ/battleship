const createShip = require("./ship")

test("creates ship's hp", () => {
    expect(createShip(4).hp).toEqual([false, false, false, false]);
});

test("ship gets sunk", () => {
    const newShip = createShip(2);
    newShip.hit(0);
    newShip.hit(1);
    expect(newShip.isSunk).toBeTruthy();
});