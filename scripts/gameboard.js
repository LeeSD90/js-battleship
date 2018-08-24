const GameBoard = () => {
  const gameboard = {};
  gameboard.board = []

  for(i = 0; i < 10; i++){
    gameboard.board.push(new Array(10).fill(0));
  }

  return gameboard;
}

module.exports = GameBoard;