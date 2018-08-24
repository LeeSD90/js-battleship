const Player = require('./player');

test('it correctly initializes a new player with a default name', () => {
  p = Player();
  expect(p.name).toBe("Player");
});

test('it correctly initializes a new player with a given name', () => {
  p = Player("Lee");
  expect(p.name).toBe("Lee");
});

test('it correctly assigns a gameboard to the player', () => {
  p = Player("Lee");
  g = { board: [] };
  p.setGameboard(g);
  expect(p.gameboard).not.toBeUndefined();
});