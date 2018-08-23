const Ship = (l = 2) => {
  const ship = {};
  ship.length = (Number.isInteger(l) && l >= 2 && l <= 5) ? l : 2;
  ship.sunk = false;
  ship.hits = [];

  ship.hit = (p) => {
    if(Number.isInteger(p)
        && p >= 1
        && p <= ship.length
        && !ship.hits.includes(p)){
          ship.hits.push(p);
      }
  }
  
  return ship;
}

module.exports = Ship;