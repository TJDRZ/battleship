const player = require("../factories/player");

test("active player", () => expect(player.attack()).toBeTruthy());

test("inactive player", () => expect(player.attack()).toBeFalsy());