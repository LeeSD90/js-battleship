const GameBoard = require('./gameboard');

test('it creates a default board object with a 10x10 grid', () => {
  gb = GameBoard();
  expect(gb.board).not.toBeUndefined();
  expect(gb.board[0][0]).toBe(0);
  expect(gb.board[9][9]).toBe(0);
  expect(gb.board[5][4]).toBe(0);
  expect(gb.board[10]).toBeUndefined();
  expect(gb.board[-1]).toBeUndefined();
  expect(gb.board[9][10]).toBeUndefined();
  expect(gb.board[0][-1]).toBeUndefined();
});

test('it correctly places ships horizontally at the specified coordinates', () => {
  gb = GameBoard();
  ship = { length: 3 };
  gb.placeShip(ship, 0, 0, "h");
  expect(gb.board[0][0]).toMatchObject({ ship: ship, index: 0});
  expect(gb.board[1][0]).toMatchObject({ ship: ship, index: 1});
  expect(gb.board[2][0]).toMatchObject({ ship: ship, index: 2});

  ship2 = { length: 5 };
  gb.placeShip(ship2, 3, 2, "h");
  expect(gb.board[3][2]).toMatchObject({ ship: ship2, index: 0});
  expect(gb.board[4][2]).toMatchObject({ ship: ship2, index: 1});
  expect(gb.board[5][2]).toMatchObject({ ship: ship2, index: 2});
  expect(gb.board[6][2]).toMatchObject({ ship: ship2, index: 3});
  expect(gb.board[7][2]).toMatchObject({ ship: ship2, index: 4});
});

test('it correctly places ships vertically at the specified coordinates', () => {
  gb = GameBoard();
  ship = { length: 3 };
  gb.placeShip(ship, 0, 0, "v");
  expect(gb.board[0][0]).toMatchObject({ ship: ship, index: 0});
  expect(gb.board[0][1]).toMatchObject({ ship: ship, index: 1});
  expect(gb.board[0][2]).toMatchObject({ ship: ship, index: 2});

  ship2 = { length: 5 };
  gb.placeShip(ship2, 3, 2, "v");
  expect(gb.board[3][2]).toMatchObject({ ship: ship2, index: 0});
  expect(gb.board[3][3]).toMatchObject({ ship: ship2, index: 1});
  expect(gb.board[3][4]).toMatchObject({ ship: ship2, index: 2});
  expect(gb.board[3][5]).toMatchObject({ ship: ship2, index: 3});
  expect(gb.board[3][6]).toMatchObject({ ship: ship2, index: 4});
});

test('it will not place a ship off of the board', () => {
  gb = GameBoard();
  ship = { length: 3 };
  expect(() => { gb.placeShip(ship, 9, 1, "h") }).toThrowError();
});