const Ship = () => {
  const ship = {};
  ship.length = 3;
  ship.sunk = false;
  ship.hits = [];

  return ship;
}

module.exports = Ship;