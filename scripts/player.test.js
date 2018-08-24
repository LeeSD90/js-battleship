const Player = require('./player');

test('it correctly initializes a new player with a default name', () => {
  p = Player();
  expect(p.name).toBe("Player");
  expect(p.gameboard).not.toBeUndefined();
});

test('it correctly initializes a new player with a given name', () => {
  p = Player("Lee");
  expect(p.name).toBe("Lee");
  expect(p.gameboard).not.toBeUndefined();
});