const gameboard = require("./gameboard");

test("add ship to gameboard", () => {
    expect(gameboard.addShip(B, 2, V, length)).toEqual(); /* V means verticle, wherever you click will be the coordinates, then toggle between verticle and horizontal */
});