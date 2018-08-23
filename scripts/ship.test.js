const ship = require('./ship');

test("it creates a default ship object", () => {
  myShip = ship();
  expect(myShip.length).toBe(0);
  expect(myShip.sunk).toBe(false);
  expect(myShip.hits).toEqual([]);
});