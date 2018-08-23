const Ship = require('./ship');

test("it creates a default ship object", () => {
  myShip = Ship();
  expect(myShip.length).toBe(2);
  expect(myShip.sunk).toBe(false);
  expect(myShip.hits).toEqual([]);
});

test("it creates a ship with the correct length given a length parameter", () => {
  myShip = Ship(4);
  expect(myShip.length).toBe(4);
  expect(myShip.sunk).toBe(false);
  expect(myShip.hits).toEqual([]);
});

test("it assigns the default ship length when the specified ship length is less than two, above 5 or a non integer value", () => {
 myShip = Ship(-2);
 expect(myShip.length).toBe(2);
 myShip = Ship(2.5);
 expect(myShip.length).toBe(2);
 myShip = Ship(7);
 expect(myShip.length).toBe(2);
 myShip = Ship(3.23);
 expect(myShip.length).toBe(2);
 myShip = Ship("hello");
 expect(myShip.length).toBe(2);
});

test("it correctly marks a position as hit when given a valid number", () => {
  myShip = Ship(5);
  myShip.hit(5);
  expect(myShip.hits).toEqual([5])
  myShip.hit(2);
  expect(myShip.hits).toEqual([5, 2]);
});