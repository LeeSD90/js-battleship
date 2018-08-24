const GameBoard = () => {
  const gameboard = {};
  gameboard.board = []

  for(i = 0; i < 10; i++){
    gameboard.board.push(new Array(10).fill(0));
  }

  gameboard.placeShip = (ship, x, y, o) => {
    gameboard.board[x][y] = { ship: ship, index: 0 };
    for(i = 1; i < ship.length; i++){
      o === "h" ? x++ : y++;
      gameboard.board[x][y] = { ship: ship, index: i };
    }
  }

  return gameboard;
}

module.exports = GameBoard;