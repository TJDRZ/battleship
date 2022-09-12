function ship(coordinates) {
  const hp = [];
  coordinates.forEach((coordinate) => {
    hp.push({
      x: coordinate[0],
      y: coordinate[1],
      attacked: false,
    });
  });
  return {
    hp,
    hit(coordinates) {
      const hitpoint = this.hp.find(
        (hitpoint) =>
          hitpoint.x === coordinates[0] && hitpoint.y === coordinates[1]
      );
      hitpoint.attacked = true;
      if (this.hp.find((hitpoint) => hitpoint.attacked === false)) {
        return;
      } else this.isSunk = true;
    },
    isSunk: false,
  };
}

module.exports = ship;
