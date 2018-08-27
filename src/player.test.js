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

test('it correctly assigns an opposition gameboard', () => {
  p = Player("p1");
  p2 = Player("p2");
  g = { board: [] };
  g2 = { board: [] };
  p.setGameboard(g);
  p2.setGameboard(g2);
  p.setOpposition(p2);
  expect(p.opposition.gameboard).not.toBeUndefined();
  expect(p2.gameboard).toBe(p.opposition.gameboard);
});