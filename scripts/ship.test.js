const ship = require('./ship');

test("it creates a default ship object", () => {
  ship = ship();
  expect(ship.length).toBe(0);
  expect(ship.sunk).toBe(false);
  expect(ship.hits).toBe([]);
});