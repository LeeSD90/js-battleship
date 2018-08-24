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