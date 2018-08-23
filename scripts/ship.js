const Ship = (l = 2) => {
  const ship = {};
  ship.length = (Number.isInteger(l) && l >= 2 && l <= 5) ? l : 2;
  ship.sunk = false;
  ship.hits = [];

  return ship;
}

module.exports = Ship;